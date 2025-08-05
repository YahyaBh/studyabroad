"use client"
import { FaArrowDown, FaLocationArrow, FaSchool, FaSearch } from "react-icons/fa";
import "./page.scss";
import Footer from "./comps/footer/footer";
import Navbar from "./comps/navbar/navbar";

import { client, urlFor } from './lib/sanityClient';
import { useEffect, useState } from "react";
import Loading from "./comps/loading/page";
import Link from "next/link";
import toast from "react-hot-toast";
import CardUni from "./comps/universityCard/CardUni";
import { Element, scroller } from "react-scroll";
import Contact from "./comps/contact/Contact";



export default function Home() {


  const [loading, setLoading] = useState(true);

  const [homeData, setHomeData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("")


  const [countries, setCountries] = useState([])
  const [programs, setPrograms] = useState([])

  const handleSearch = () => {

    if (selectedCountry && selectedProgram) {
      window.location.href = `/universities?country=${selectedCountry}&program=${selectedProgram}`
    } else if (selectedCountry) {
      window.location.href = `/universities?country=${selectedCountry}`
    } else if (selectedProgram) {
      window.location.href = `/universities?program=${selectedProgram}`
    } else {
      toast.error("Please select a country or program")
    }


  }




  useEffect(() => {
    loadData();
    const hash = window.location.hash;

    if (hash) {
      const section = hash.replace('#', '');
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -80,
        });
      }, 200); // Wait to ensure DOM is rendered
    }
  }, []);


  const loadData = async () => {
    const query = `*[_type == "home"] {
    description,
    title,
    services[]->{
      _id,
      title,
      description,
      image
    },
    universities[]->{
      _id,
      name,
      slug,
      _createdAt,
      _updatedAt,
      acceptance_rate,
      admission_requirements,
      city,
      country,
      description,
      overview,
      rankingGlobal,
      rankingLocal,
      type,
      website,
      why_univ,
      location,
      tuition_fees[]{
        _key,
        fee,
        fee_for
      },
      images[]{
        _key,
        _type,
        asset->{
          _id,
          url
        }
      },
      logo
    }
  }`;

    const data = await client.fetch(`*[_type == "university"]{
            country,
            courses[]{course},
        }`)



    // Get unique countries
    const countriesSet = new Set(data.map(univ => univ.country).filter(Boolean))
    setCountries(Array.from(countriesSet))

    // Get unique programs
    const allPrograms = data.flatMap(u => u.courses?.map(c => c.course) || []);
    setPrograms(Array.from(new Set(allPrograms)));

    const homeData = await client.fetch(query);

    setHomeData(homeData[0]);
    setLoading(false);
  };




  return (loading ? <Loading loading={loading} /> :
    <>

      <Navbar />

      <header>

        <div className="header-container">
          <div className="left">
            <h1>Your <span>Global Education</span> Journey Begins Here</h1>

            <h4>Discover, Apply, Achieve</h4>

            <p>Find Your Dream University and Transform Your Future Unlock unparalleled opportunities with top global institutions. Immerse yourself in diverse cultures, gain cutting-edge knowledge, and build a successful career. Your journey to excellence starts here.</p>

            <div className="search-container">
              <label className="sidedrop">
                Country
                <select className="select" onChange={(e) => setSelectedCountry(e.target.value)}>
                  <option value="">Select Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </select>
              </label>

              <div className="line"></div>

              <label className="sidedrop">
                Program
                <select className="select" onChange={(e) => setSelectedProgram(e.target.value)}>
                  <option value="">Select Program</option>
                  {programs.map((program, index) => (
                    <option key={index} value={program}>{program}</option>
                  ))}
                </select>
              </label>

              <button onClick={handleSearch}><FaSearch /></button>
            </div>
          </div>

          <img className="plane" src="/assets/images/Hero/Plane.png" alt="plane" />

          <div className="right">
            <img className="backImg" src="/assets/images/Hero/Rectangle.svg" />
            <img className="absol" src="/assets/images/Hero/Map.svg" />
            <img className="absol per1" src="/assets/images/Hero/PersonGirl.svg" />
            <img className="absol per2" src="/assets/images/Hero/PersonBoy.svg" />

            <img className="absol icon" src="/assets/images/Hero/TurkeyIcon.svg" />
            <img className="absol icon2" src="/assets/images/Hero/FranceIcon.svg" />
            <img className="absol icon3" src="/assets/images/Hero/UKIcon.svg" />
            <img className="absol icon4" src="/assets/images/Hero/GermanyIcon.svg" />
          </div>
        </div>


      </header >



      <section className="about">
        <div className="about_container">
          <div className="left">


            <h3 className="title-main"><span className="line-l"></span> About Us <span className="line-r"></span></h3>

            <h2>{homeData?.title} : Your Gateway to Educational Excellence</h2>

            <p>{homeData?.description}</p>

            <Link href="/about">Learn More</Link>

            <img src="/assets/images/Hero/ArrowButton.svg" alt="arrow" />
          </div>

          <div className="right">
            <img src="/assets/images/Hero/GraduateGirl.png" alt="woman holding graduate" />
          </div>
        </div>
      </section>

      <Element name="services">
        <section className="services">


          <div className="services-container">

            <h3 className="title-main"><span className="line-l"></span> Services <span className="line-r"></span></h3>


            <div className="services-main">

              <div className="left">
                <h2>Offered services and their description.</h2>

                <p>Our strategies for achieving global academic success, your guide to opening new horizons.</p>
              </div>

              <div className="right">

                <div className="service-card">
                  <img src={urlFor(homeData?.services[0]?.image)} alt="Preparing Visa Document" />

                  <div className="content">
                    <h4>{homeData?.services[0]?.title}</h4>
                    <p>{homeData?.services[0]?.description}</p>
                  </div>
                </div>

              </div>

            </div>


            <div className="services-cards">
              {homeData?.services?.slice(1, 5).map((service, index) => (

                <div className="service-card" key={index + service.title}>

                  <div className="images-container">
                    <img className="brick-left" src="/assets/images/Services/BricksWall.svg" />
                    <img src={urlFor(service.image)} alt={service._id} />
                    <img className="brick-right" src="/assets/images/Services/BricksWall.svg" />
                  </div>


                  <div className="content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      </Element>


      <div className="line-divider"></div>


      {/* <section className="countires">
        <div className="countires-container">

          <h2>Explore the best global <br /> study destinations.</h2>

          <p>We provide you with an overview of the most popular countries for studying abroad, highlighting their capitals and the advantages each destination offers.</p>

          <div className="countires-cards">
            <div className="countires-card">
              <img src="/assets/images/HeroBack.svg" />



              <h4><FaLocationArrow /> Washington</h4>

              <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


              <button>Learn More <MdArrowOutward /> </button>
            </div>

            <div className="countires-card">
              <img src="/assets/images/HeroBack.svg" />



              <h4><FaLocationArrow /> Washington</h4>

              <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


              <button>Learn More <MdArrowOutward /> </button>
            </div>

            <div className="countires-card">
              <img src="/assets/images/HeroBack.svg" />



              <h4><FaLocationArrow /> Washington</h4>

              <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


              <button>Learn More <MdArrowOutward /> </button>
            </div>

            <div className="countires-card">
              <img src="/assets/images/HeroBack.svg" />



              <h4><FaLocationArrow /> Washington</h4>

              <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


              <button>Learn More <MdArrowOutward /> </button>
            </div>
          </div>

          <button className="explore">Explore The Countries</button>

        </div>
      </section> */}

      <section className="universities">
        <div className="universities-container">

          <h2>World Universities Guide</h2>

          <p>Explore top universities worldwide, including in the US, UK, and Arab countries, with details on admissions, programs, fees, and scholarships.</p>

          <div className="universities-cards">
            {homeData?.universities?.slice(0, 4).map((university, index) => (
              <CardUni university={university} index={index} key={university._id} />
            ))}

          </div>

          <Link href='/universities' className="explore">Explore The Universities</Link>

        </div>
      </section>

      <div className="line-divider"></div>


      <section className="achieve">

        <h3 className="title-main"><span className="line-l"></span> Achieved <span className="line-r"></span></h3>


        <section className="achieve-container">

          <div className="left">
            <h2>What Have We Achieved?</h2>

            <p>We’ve guided over 1,000 students to top universities worldwide, secured scholarships, and ensured smooth transitions to life abroad. Our success is reflected in the bright futures of the students we’ve supported.</p>

            <div className="achieve-card-container">
              <div className="achieve-card-t">
                <div className="achieve-card">
                  <div className="achieve-card-content">
                    <h3>Over 1,000 Students Guided</h3>
                    {/* <span className="icon"><FaSchool /></span> */}
                  </div>

                  <p>We have successfully assisted students in securing admission to top universities worldwide.</p>
                </div>

                <div className="achieve-card">
                  <div className="achieve-card-content">
                    <h3>Over 1,000 Students Guided</h3>
                    {/* <span className="icon"><FaSchool /></span> */}
                  </div>

                  <p>We have successfully assisted students in securing admission to top universities worldwide.</p>
                </div>

              </div>

              <div className="achieve-card-b">
                <div className="achieve-card">
                  <div className="achieve-card-content">
                    <h3>Over 1,000 Students Guided</h3>
                    {/* <span className="icon"><FaSchool /></span> */}
                  </div>

                  <p>We have successfully assisted students in securing admission to top universities worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <img src="/assets/images/Achiev/GuyAch.svg" />
          </div>




        </section>

      </section >


      <section className="partners">


        <div className="partners-container">

          <h3 className="title-main"><span className="line-l"></span> University Partners <span className="line-r"></span></h3>

          <div className="top-container">

            <img src="/assets/images/Partners/Uni1.svg" />
            <img src="/assets/images/Partners/Uni2.svg" />
            <img src="/assets/images/Partners/Uni3.svg" />
            <img src="/assets/images/Partners/Uni4.svg" />
            <img src="/assets/images/Partners/Uni5.svg" />
            <img src="/assets/images/Partners/Uni1.svg" />
            <img src="/assets/images/Partners/Uni2.svg" />
            <img src="/assets/images/Partners/Uni3.svg" />
            <img src="/assets/images/Partners/Uni4.svg" />
            <img src="/assets/images/Partners/Uni5.svg" />
          </div>


          <div className="bottom-container">
            <img src="/assets/images/Partners/Uni1.svg" />
            <img src="/assets/images/Partners/Uni2.svg" />
            <img src="/assets/images/Partners/Uni3.svg" />
            <img src="/assets/images/Partners/Uni4.svg" />
            <img src="/assets/images/Partners/Uni5.svg" />
            <img src="/assets/images/Partners/Uni1.svg" />
            <img src="/assets/images/Partners/Uni2.svg" />
            <img src="/assets/images/Partners/Uni3.svg" />
            <img src="/assets/images/Partners/Uni4.svg" />
            <img src="/assets/images/Partners/Uni5.svg" />
          </div>

        </div>



      </section>


      <Contact />


      <Footer />
    </>
  );
}
