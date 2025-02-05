import { FaLocationArrow, FaSearch } from 'react-icons/fa'
import Footer from '../comps/footer/footer'
import Navbar from '../comps/navbar/navbar'
import './page.scss'
import { MdArrowOutward } from 'react-icons/md'
import { IoMdStar } from 'react-icons/io'
const page = () => {

    return (
        <>

            <Navbar />

            <header>
                <div className="header-container">


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
            </header>


            <div className="universities">

                <h3 className="title-main"><span className="line-l"></span> Services <span className="line-r"></span></h3>


                <div className="universities-container">


                    <div className="titles">
                        <h2>Explore the best global <br /> study destinations.</h2>

                        <p>We provide you with an overview of the most popular countries for studying abroad, highlighting their capitals and the advantages each destination offers.</p>

                    </div>


                    <div className="universities-cards">
                        <div className="universities-card">
                            <img src="/assets/images/HeroBack.svg" />

                            <div className="rating">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>

                            <h4><FaLocationArrow /> Washington</h4>

                            <h3>Korea University</h3>

                            <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


                            <button>Learn More <MdArrowOutward /> </button>
                        </div>



                    </div>
                </div>
            </div>


            <Footer />

        </>
    )
}

export default page