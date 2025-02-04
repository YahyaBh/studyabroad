import Footer from "../comps/footer/footer"
import Navbar from "../comps/navbar/navbar"

import { FaLocationArrow, FaSearch } from 'react-icons/fa'
import { MdArrowOutward } from "react-icons/md"


import './page.scss'

const page = () => {
    return (
        <>


            <Navbar />


            <header>
                <div className="header-container">

                    <div className="left" >

                        <h2>Explore Study <span>Destinations</span></h2>

                        <p>Discover the opportunities and benefits of studying in your dream country.</p>

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
                    </div>

                    <div className="right">

                        <div className="card-cont">
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

                    </div>

                </div>
            </header>

            <Footer />

        </>
    )
}

export default page