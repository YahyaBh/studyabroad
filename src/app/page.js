import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./page.scss";

export default function Home() {
  return (
    <>
      <nav>
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
            <label>Country</label>
            <select>
              <option disabled selected>Name of country</option>
              <option value="country1">Country 1</option>
              <option value="country2">Country 2</option>
            </select>
          </div>

          <span className="search-wall"></span>

          <div className="select-container">

          <label>Country</label>
          <select>
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
      </nav>

      <header>

      </header>


    </>
  );
}
