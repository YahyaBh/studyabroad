import { FaSearch } from 'react-icons/fa'
import './page.scss'
import { IoIosArrowDown } from 'react-icons/io'


function About() {
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



                    <div className="header-left">

                        <h3 className="title-main"><span className="line-l"></span> Services <span className="line-r"></span></h3>



                        <h2>BEDAYA <span>:</span> Your Gateway to Educational <span>Excellence</span></h2>


                        <p>Founded in 2017, Beginning is a premier study abroad consultancy dedicated to helping ambitious students turn their academic dreams into reality. With a commitment to excellence, we offer end-to-end services that guide students from choosing the right university to adapting to life abroad. Our mission is to empower students by simplifying the complexities of studying overseas, ensuring they can focus on their education and personal growth.
                            At Beginning, we believe in a personalized approach to every student’s journey. Whether it's identifying the ideal program, navigating admissions processes, or preparing for cultural transitions, we are here to make the journey as seamless as possible</p>

                        <button>Get Consultation</button>

                    </div>

                    <div className="header-right">
                        <img src="/assets/images/About/HeroImg.png" />
                    </div>
                </div>


            </header>
        </>
    )
}

export default About