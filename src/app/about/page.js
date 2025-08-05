'use client'
import { FaArrowDown, FaLocationArrow, FaSchool } from 'react-icons/fa'
import Footer from '../comps/footer/footer'
import Navbar from '../comps/navbar/navbar'
import './about.scss'
import { client, urlFor } from '../lib/sanityClient'
import Loading from '../comps/loading/page'
import { useEffect, useState } from 'react'
import Contact from '../comps/contact/Contact'


function About() {


    const [loading, setLoading] = useState(true);

    const [homeData, setHomeData] = useState([]);





    useEffect(() => {
        loadData();

    }, []);


    const loadData = async () => {
        const query = `*[_type == "home"] {
        title,
        description,
        services[]->{
            _id,
            title,
            description,
            image
        }
    }`;


        const homeData = await client.fetch(query);


        setHomeData(homeData[0]);
        setLoading(false);
    };

    return (
        loading ? <Loading /> :
            <>
                <Navbar />


                <header>

                    <div className="header-container">



                        <div className="header-left">

                            <h3 className="title-main"><span className="line-l"></span> Services <span className="line-r"></span></h3>



                            <h2>{homeData?.title} <span>:</span> Your Gateway to Educational <span>Excellence</span></h2>


                            <p>Founded in 2017, Beginning is a premier study abroad consultancy dedicated to helping ambitious students turn their academic dreams into reality. With a commitment to excellence, we offer end-to-end services that guide students from choosing the right university to adapting to life abroad. Our mission is to empower students by simplifying the complexities of studying overseas, ensuring they can focus on their education and personal growth.
                                At Beginning, we believe in a personalized approach to every student’s journey. Whether it's identifying the ideal program, navigating admissions processes, or preparing for cultural transitions, we are here to make the journey as seamless as possible</p>

                            <button>Get Consultation</button>

                        </div>

                        <div className="header-right">
                            <img src="/assets/images/About/HeroImg.png" />
                        </div>
                    </div>


                </header>


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


                <section className='founders'>
                    <div className="founders-container">

                        <h3 className="title-main"><span className="line-l"></span> Founders <span className="line-r"></span></h3>



                        <div className='top-content'>
                            <div className='left'>
                                <h3>Founders</h3>

                                <p>The visionaries behind Beginning are education experts with years of experience in academic counseling and international education. They recognized the challenges students face in navigating the complex process of studying abroad and built Beginning to be a bridge to success.</p>
                            </div>

                            <div className='right'>
                                <img src='/assets/images/About/ServicesIcons.svg' />
                            </div>
                        </div>


                        <div className='bottom-content'>
                            <div className='per-card'>
                                <img src='/assets/images/About/PERSONTEST.png' />

                                <div className='text'>
                                    <h3>Dr. Nada Al-Azab</h3>
                                    <h5>A dedicated professional with expertise in global education trends, committed to student success.</h5>
                                </div>
                            </div>

                            <div className='per-card'>
                                <img src='/assets/images/About/PERSONTEST.png' />
                                <div className='text'>
                                    <h3>Dr. Nada Al-Azab</h3>
                                    <h5>A dedicated professional with expertise in global education trends, committed to student success.</h5>
                                </div>
                            </div>

                            <div className='per-card'>
                                <img src='/assets/images/About/PERSONTEST.png' />
                                <div className='text'>
                                    <h3>Dr. Nada Al-Azab</h3>
                                    <h5>A dedicated professional with expertise in global education trends, committed to student success.</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className='why-us'>

                    <h3 className="title-main"><span className="line-l"></span> Choose Us <span className="line-r"></span></h3>


                    <div className='whyus-container'>

                        <h2>Why Choose Us ?</h2>

                        <h4>Your trusted partner in achieving global education dreams.</h4>


                        <div className='whyus-cards'>

                            <div className='whyus-card'>
                                <img src='/assets/images/About/IconWorld.svg' />

                                <div className='text'>
                                    <h4>Global Education</h4>
                                    <p>With 6+ years of expertise, we’ve helped students gain admission to top universities worldwide.</p>
                                </div>
                            </div>


                            <div className='whyus-card'>
                                <img src='/assets/images/About/IconWorld.svg' />

                                <div className='text'>
                                    <h4>Global Education</h4>
                                    <p>With 6+ years of expertise, we’ve helped students gain admission to top universities worldwide.</p>
                                </div>
                            </div>


                            <div className='whyus-card'>
                                <img src='/assets/images/About/IconWorld.svg' />

                                <div className='text'>
                                    <h4>Global Education</h4>
                                    <p>With 6+ years of expertise, we’ve helped students gain admission to top universities worldwide.</p>
                                </div>
                            </div>


                            <div className='whyus-card'>
                                <img src='/assets/images/About/IconWorld.svg' />

                                <div className='text'>
                                    <h4>Global Education</h4>
                                    <p>With 6+ years of expertise, we’ve helped students gain admission to top universities worldwide.</p>
                                </div>
                            </div>


                            <div className='whyus-card'>
                                <img src='/assets/images/About/IconWorld.svg' />

                                <div className='text'>
                                    <h4>Global Education</h4>
                                    <p>With 6+ years of expertise, we’ve helped students gain admission to top universities worldwide.</p>
                                </div>
                            </div>


                            <div className='whyus-card'>
                                <img src='/assets/images/About/IconWorld.svg' />

                                <div className='text'>
                                    <h4>Global Education</h4>
                                    <p>With 6+ years of expertise, we’ve helped students gain admission to top universities worldwide.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                <section className='candid'>

                    <h3 className="title-main"><span className="line-l"></span> Choose Us <span className="line-r"></span></h3>


                    <div className='candid-container'>

                        <h2>Why Choose Us ?</h2>

                        <h4>Your trusted partner in achieving global education dreams.</h4>



                        <div className='candid-cards'>
                            <div className='candid-card'>
                                <img src='/assets/images/About/IconWorld.svg' />
                            </div>
                        </div>

                    </div>

                </section>

                <section className="achieve">

                    <h3 className="title-main"><span className="line-l"></span> About Us <span className="line-r"></span></h3>


                    <section className="achieve-container">

                        <div className="left">
                            <h2>What Have We Achieved?</h2>

                            <p>We’ve guided over 1,000 students to top universities worldwide, secured scholarships, and ensured smooth transitions to life abroad. Our success is reflected in the bright futures of the students we’ve supported.</p>

                            <div className="achieve-card-container">
                                <div className="achieve-card-t">
                                    <div className="achieve-card">
                                        <div className="achieve-card-content">
                                            <h3>Over 1,000 Students Guided</h3>
                                            <span className="icon"><FaSchool /></span>
                                        </div>

                                        <p>We have successfully assisted students in securing admission to top universities worldwide.</p>
                                    </div>

                                    <div className="achieve-card">
                                        <div className="achieve-card-content">
                                            <h3>Over 1,000 Students Guided</h3>
                                            <span className="icon"><FaSchool /></span>
                                        </div>

                                        <p>We have successfully assisted students in securing admission to top universities worldwide.</p>
                                    </div>

                                </div>

                                <div className="achieve-card-b">
                                    <div className="achieve-card">
                                        <div className="achieve-card-content">
                                            <h3>Over 1,000 Students Guided</h3>
                                            <span className="icon"><FaSchool /></span>
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

                <Contact />

                <Footer />
            </>
    )
}

export default About