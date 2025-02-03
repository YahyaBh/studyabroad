import './navbar.scss'
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

                

                <button className="get_consult">Get Consultation</button>
            </div>
        </nav >
    )
}

export default Navbar