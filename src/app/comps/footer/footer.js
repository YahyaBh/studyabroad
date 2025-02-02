import { FaLocationArrow, FaPhone, FaSchool } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import './footer.scss'


const Footer = () => {
    return (
        <footer>


            <div className="footer-container">



                <div className="cont">
                    <ul>
                        <li><FaSchool /> Satyamstudio</li>
                        <li><FaLocationArrow /> 8819 Ohio St. South Gate, CA 90280</li>
                        <li><MdEmail /> Ourstudio@hello.com</li>
                        <li><FaPhone /> +1 386-688-3295</li>
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

    )
}

export default Footer