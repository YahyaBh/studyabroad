import { FaArrowDown, FaLocationArrow, FaPhone, FaSchool, FaSearch, FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import "./page.scss";

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <a href="/">
            <img src="/assets/images/Logo.svg" />
          </a>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/infos">Information <IoIosArrowDown /></a>
            <a href="/about">About Us</a>
          </div>

          <div className="search-box">
            <div className="select-container">
              <label htmlFor="country">Country</label>
              <select id="country">
                <option disabled defaultValue={""}>Name of country</option>
                <option value="country1">Country 1</option>
                <option value="country2">Country 2</option>
              </select>
            </div>

            <span className="search-wall"></span>

            <div className="select-container">

              <label htmlFor="program">Country</label>
              <select id="program">
                <option disabled selected>Programmes</option>
                <option value="program1">Program 1</option>
                <option value="program2">Program 2</option>
              </select>

            </div>
            <button>
              <i><FaSearch /></i>
            </button>
          </div>

          <button className="get_consult">Get Consultation</button>
        </div>
      </nav >


      <header>

        <div className="header-container">
          <div className="left">
            <h1>Your <span>Global Education</span> Journey Begins Here</h1>

            <h4>Discover, Apply, Achieve</h4>

            <p>Find Your Dream University and Transform Your Future Unlock unparalleled opportunities with top global institutions. Immerse yourself in diverse cultures, gain cutting-edge knowledge, and build a successful career. Your journey to excellence starts here.</p>

            <div className="buttons">
              <button className="get_consult">Get Consultation</button>
              <button className="explore">Explore Universities</button>
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


      </header>



      <section className="about">
        <div className="about_container">
          <div className="left">


            <h3 className="title-main"><span className="line-l"></span> About Us <span className="line-r"></span></h3>

            <h2>BEDAYA : Your Gateway to Educational Excellence</h2>

            <p>Beginning, established in 2017, is dedicated to supporting ambitious students in achieving their educational dreams abroad. We have successfully assisted numerous students in gaining admission to top global universities and institutions. Our comprehensive advisory services cover everything from selecting the right university to adapting to life abroad, ensuring a smooth and rewarding study experience. With extensive expertise and a committed team, Beginning has become a trusted leader in study abroad consultation ...</p>

            <button>Learn More</button>

            <img src="/assets/images/Hero/ArrowButton.svg" alt="arrow" />
          </div>

          <div className="right">
            <img src="/assets/images/Hero/GraduateGirl.png" />
          </div>
        </div>
      </section>


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
                <img src="/assets/images/Services/VisaIcon.svg" />

                <div className="content">
                  <h4>Preparing the Visa file</h4>
                  <p>Our advisory services cover everything from selecting the right university to adapting to life abroad, ensuring a smooth and rewarding study experience.</p>
                </div>
              </div>

            </div>

          </div>


          <div className="services-cards">

            <div className="service-card">

              <div className="images-container">
                <img className="brick-left" src="/assets/images/Services/BricksWall.svg" />
                <img src="/assets/images/Services/StudyIcon.svg" />
                <img className="brick-right" src="/assets/images/Services/BricksWall.svg" />
              </div>


              <div className="content">
                <h4>Education Consultation</h4>
                <p>With our expert teams, you’ll be able to find the perfect path in your education , with suitable demanded programs</p>
              </div>
            </div>

            <div className="service-card">

              <div className="images-container">
                <img className="brick-left" src="/assets/images/Services/BricksWall.svg" />
                <img src="/assets/images/Services/StudyIcon.svg" />
                <img className="brick-right" src="/assets/images/Services/BricksWall.svg" />
              </div>


              <div className="content">
                <h4>Education Consultation</h4>
                <p>With our expert teams, you’ll be able to find the perfect path in your education , with suitable demanded programs</p>
              </div>
            </div>

            <div className="service-card">

              <div className="images-container">
                <img className="brick-left" src="/assets/images/Services/BricksWall.svg" />
                <img src="/assets/images/Services/StudyIcon.svg" />
                <img className="brick-right" src="/assets/images/Services/BricksWall.svg" />
              </div>


              <div className="content">
                <h4>Education Consultation</h4>
                <p>With our expert teams, you’ll be able to find the perfect path in your education , with suitable demanded programs</p>
              </div>
            </div>

            <div className="service-card">

              <div className="images-container">
                <img className="brick-left" src="/assets/images/Services/BricksWall.svg" />
                <img src="/assets/images/Services/StudyIcon.svg" />
                <img className="brick-right" src="/assets/images/Services/BricksWall.svg" />
              </div>


              <div className="content">
                <h4>Education Consultation</h4>
                <p>With our expert teams, you’ll be able to find the perfect path in your education , with suitable demanded programs</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <div className="line-divider"></div>


      <section className="countires">
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
      </section>

      <section className="universities">
        <div className="universities-container">

          <h2>World Universities Guide</h2>

          <p>Explore top universities worldwide, including in the US, UK, and Arab countries, with details on admissions, programs, fees, and scholarships.</p>

          <div className="universities-cards">
            <div className="universities-card">
              <img src="/assets/images/HeroBack.svg" />

              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h4><FaLocationArrow /> Washington</h4>

              <h3>Korea University</h3>

              <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


              <button>Learn More <MdArrowOutward /> </button>
            </div>
            <div className="universities-card">
              <img src="/assets/images/HeroBack.svg" />

              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h4><FaLocationArrow /> Washington</h4>

              <h3>Korea University</h3>

              <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


              <button>Learn More <MdArrowOutward /> </button>
            </div>
            <div className="universities-card">
              <img src="/assets/images/HeroBack.svg" />

              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h4><FaLocationArrow /> Washington</h4>

              <h3>Korea University</h3>

              <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


              <button>Learn More <MdArrowOutward /> </button>
            </div>
            <div className="universities-card">
              <img src="/assets/images/HeroBack.svg" />

              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h4><FaLocationArrow /> Washington</h4>

              <h3>Korea University</h3>

              <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


              <button>Learn More <MdArrowOutward /> </button>
            </div>

          </div>

          <button className="explore">Explore The Countries</button>

        </div>
      </section>

      <div className="line-divider"></div>


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


      <section className="contact">

        <div className="title">
          <h2>Contact Us</h2>
          <FaArrowDown />
        </div>


        <div className="contact-container">
          <div className="left">
            <h3>Have Questions? <br /> Get in Touch!</h3>

            <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>


            <div className="location">
              <div className="local">
                <span className="icons"><FaLocationArrow /></span>
                <h4>Rabat — 723 17th Street, Office 478 hassan, IM 5</h4>
              </div>

              <div className="local">
                <span className="icons"><FaLocationArrow /></span>
                <h4>Rabat — 723 17th Street, Office 478 hassan, IM 5</h4>
              </div>

              <div className="local">
                <span className="icons"><FaLocationArrow /></span>
                <h4>Rabat — 723 17th Street, Office 478 hassan, IM 5</h4>
              </div>

            </div>
          </div>

          <div className="right">
            <div className="double-inp">
              <label>
                <input type="text" placeholder="Search" />
              </label>
              <label>
                <input type="email" placeholder="Email" />
              </label>
            </div>

            <div className="double-inp">
              <label>
                <input type="phone" placeholder="Phone" />
              </label>
              <label>
                <input type="phone" placeholder="Phone" />
              </label>
            </div>

            <textarea placeholder="How can we help you ? Feel free to get in touch!" cols={"40"} rows={"10"} />

            <div className="agree">

              <input type="checkbox" />
              <label>I agree to the terms and privacy policy</label>


            </div>

            <button className="btn-sub">🤙 Get In Touch</button>


          </div>
        </div>


      </section >


      <footer>


        <div className="footer-container">



          <div className="cont">
            <ul>
              <li><FaSchool/> Satyamstudio</li>
              <li><FaLocationArrow/> 8819 Ohio St. South Gate, CA 90280</li>
              <li><MdEmail/> Ourstudio@hello.com</li>
              <li><FaPhone/> +1 386-688-3295</li>
            </ul>
          </div>

          <div className="cont">
            <h4>Services</h4>

            <ul>
              <li>Travel Organization </li>
              <li>Preparing the Visa file</li>
              <li>University Admission</li>
              <li>University Scholarship</li>
              <li>Education Consultation</li>
            </ul>
          </div>

          <div className="cont">
            <h4>Menu</h4>

            <ul>
              <li>About Us</li>
              <li>Countries</li>
              <li>Universities  </li>
            </ul>

          </div>


          <div className="cont">
            <h4>Join a Newsletter</h4>

            <p>Subscribe to our newsletter to get the latest news and updates.</p>

            <input type="email" placeholder="Enter your email" />

            <button>Subscribe</button>
          </div>
        </div>

      </footer>

    </>
  );
}
