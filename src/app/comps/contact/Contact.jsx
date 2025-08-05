import React, { useState } from 'react'
import './Contact.scss'
import { FaArrowDown, FaLocationArrow } from 'react-icons/fa'
import { client } from '@/app/lib/sanityClient';
import toast from 'react-hot-toast';

const Contact = () => {

    const [userData = {}, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });


    async function handleSubmit() {
        e.preventDefault();


        const data = await client.create({
            _type: 'contact',
            ...userData
        })

        if (data) {
            toast.success('Your message has been sent successfully!');
            setUserData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        }

    }



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
                            <input type="text" placeholder="First name" minLength={3} onChange={e => setUserData({ ...userData, firstName: e.target.value })} required />
                        </label>
                        <label>
                            <input type="text" placeholder="Last name" minLength={3} onChange={e => setUserData({ ...userData, lastName: e.target.value })} required />
                        </label>
                    </div>

                    <div className="double-inp">
                        <label>
                            <input type="email" placeholder="Email" minLength={3} onChange={e => setUserData({ ...userData, email: e.target.value })} required />
                        </label>
                        <label>
                            <input type="phone" placeholder="Phone" minLength={3} onChange={e => setUserData({ ...userData, phone: e.target.value })} required />
                        </label>
                    </div>

                    <textarea placeholder="How can we help you ? Feel free to get in touch!" cols={"40"} rows={"10"} minLength={3} onChange={e => setUserData({ ...userData, message: e.target.value })} required />

                    <div className="agree">

                        <input type="checkbox" />
                        <label>I agree to the terms and privacy policy</label>


                    </div>

                    <button className="btn-sub" onClick={e => handleSubmit()}>🤙 Get In Touch</button>


                </div>
            </div>


        </section >
    )
}

export default Contact