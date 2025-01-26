import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./page.scss";

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <a href="/">
            <img src="/assets/images/Logo.svg" />
          </a>

          <div class="nav-links">
            <a href="/">Home</a>
            <a href="/infos">Information <IoIosArrowDown /></a>
            <a href="/about">About Us</a>
          </div>

          <div class="search-box">
            <div className="select-container">
              <label htmlFor="country">Country</label>
              <select id="country">
                <option disabled selected>Name of country</option>
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


    </>
  );
}
