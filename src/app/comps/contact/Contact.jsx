import React from 'react'
import './Contact.scss'
import { FaArrowDown, FaLocationArrow } from 'react-icons/fa'

const Contact = () => {
    return (
        <section className="contact">

            <div className="title">
                <h2>Contact Us</h2>
                <FaArrowDown />
            </div>


            <div className="contact-container">
                <div className="left">
                    <h3>Have Questions? <br /> Get in Touch!</h3>

                    <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>


                    <div className="location">
                        <div className="local">
                            <span className="icons"><FaLocationArrow /></span>
                            <h4>Rabat — 723 17th Street, Office 478 hassan, IM 5</h4>
                        </div>

                        <div className="local">
                            <span className="icons"><FaLocationArrow /></span>
                            <h4>Rabat — 723 17th Street, Office 478 hassan, IM 5</h4>
                        </div>

                        <div className="local">
                            <span className="icons"><FaLocationArrow /></span>
                            <h4>Rabat — 723 17th Street, Office 478 hassan, IM 5</h4>
                        </div>

                    </div>
                </div>

                <div className="right">
                    <div className="double-inp">
                        <label>
                            <input type="text" placeholder="Search" />
                        </label>
                        <label>
                            <input type="email" placeholder="Email" />
                        </label>
                    </div>

                    <div className="double-inp">
                        <label>
                            <input type="phone" placeholder="Phone" />
                        </label>
                        <label>
                            <input type="phone" placeholder="Phone" />
                        </label>
                    </div>

                    <textarea placeholder="How can we help you ? Feel free to get in touch!" cols={"40"} rows={"10"} />

                    <div className="agree">

                        <input type="checkbox" />
                        <label>I agree to the terms and privacy policy</label>


                    </div>

                    <button className="btn-sub">🤙 Get In Touch</button>


                </div>
            </div>


        </section >
    )
}

export default Contact