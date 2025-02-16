import Link from 'next/link'
import './navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-container">
                <Link href="/">
                    <img src="/assets/images/Logo.svg" />
                </Link>

                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/#services">Services</a>
                    <a href="/universities">Universities</a>
                    <a href="/about">About Us</a>
                </div>



                <a href='/consultation' className="get_consult">Get Consultation</a>
            </div>
        </nav >
    )
}

export default Navbar