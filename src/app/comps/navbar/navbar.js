import './navbar.scss'
import { FaSearch } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const Navbar = () => {
    return (
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
    )
}

export default Navbar