import { FaSearch } from 'react-icons/fa'
import Footer from '../comps/footer/footer'
import Navbar from '../comps/navbar/navbar'
import './page.scss'
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


            <Footer />

        </>
    )
}

export default page