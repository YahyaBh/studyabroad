'use client'
import React, { useEffect, useState } from "react"
import Navbar from "../comps/navbar/navbar"
import './page.scss'
import { MdArrowRight } from "react-icons/md"

const page = () => {

    const [currentPage, setCurrentPage] = useState();

    const [country, setCountry] = useState();

    useEffect(() => {
        setCurrentPage('country');
    }, []);


    return (
        <>
            <Navbar />

            <div className="gen-cont">
                <div className="back-img">
                    <div className="progress-bar">
                        <div className={currentPage === 'country' ? 'step active' : 'step'} onClick={() => setCurrentPage('country')}>
                            <span className="number">1</span>
                            <span className="text">Select country</span>
                        </div>
                        <div className="line"></div>
                        <div className={currentPage === 'contact' ? 'step active' : 'step'}>
                            <span className="number">2</span>
                            <span className="text">Contact information</span>
                        </div>
                        <div className="line"></div>
                        <div className={currentPage === 'date' ? 'step active' : 'step'}>
                            <span className="number">3</span>
                            <span className="text">Select Date</span>
                        </div>
                        <div className="line"></div>
                        <div className={currentPage === 'payment' ? 'step active' : 'step'}>
                            <span className="number">4</span>
                            <span className="text">Payment</span>
                        </div>
                    </div>


                    {currentPage === 'country' && <CountryPage country={country} setCountry={setCountry} setCurrentPage={setCurrentPage} />}
                    {currentPage === 'contact' && <ContactPage country={country} setCountry={setCountry} setCurrentPage={setCurrentPage} />}


                </div>

            </div>
        </>
    )
}

export default page


const CountryPage = ({ country, setCountry, setCurrentPage }) => {
    return (
        <div className="page-cont">
            <h2>Click on the country you are interested in studying in and choose the date.</h2>

            <section className="cards-cont">
                <div className={country === 'Canada' ? 'active card' : 'card'} onClick={country !== 'Canada' ? () => setCountry('Canada') : () => setCountry()} >
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197430.png" />
                    <h3>Canada</h3>
                </div>
                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197430.png" />
                    <h3>Canada</h3>
                </div>
                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197430.png" />
                    <h3>Canada</h3>
                </div>
                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197430.png" />
                    <h3>Canada</h3>
                </div>

                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197430.png" />
                    <h3>Canada</h3>
                </div>
                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197430.png" />
                    <h3>Canada</h3>
                </div>
                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197430.png" />
                    <h3>Canada</h3>
                </div>
                <div className="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197430.png" />
                    <h3>Canada</h3>
                </div>

            </section >

            {country ? <button onClick={() => setCurrentPage('contact')}>Next <MdArrowRight /></button> : null}


        </div >
    )
}

const ContactPage = ({ country, setCountry, setCurrentPage }) => {
    return (
        <div className="page-cont">
            <h2>Fill in your contact information So we contact you right away</h2>

            <section className="infos-cont">
                <div className="inps">
                    <div className="inp">
                        <label>Full Name</label>
                        <input type="text" />
                    </div>

                    <div className="inp">
                        <label>Email Address</label>
                        <input type="email" />
                    </div>

                    <div className="inp">
                        <label>Phone Number</label>
                        <input type="tel" />
                    </div>
                </div>

                <div className="inps">
                    <div className="inp">
                        <label>Study Level</label>
                        <input type="text" placeholder="Full Name" />
                    </div>

                    <div className="inp">
                        <label>Study Field</label>
                        <input type="email" placeholder="email@example.com" />
                    </div>

                    <div className="inp">
                        <label>Study Field</label>
                        <input type="email" />
                    </div>
                </div>

                <div className="inps">
                    <div className="inp">
                        <label>I want my meeting to be</label>


                    </div>
                </div>
            </section >

            {country ? <button onClick={() => setCurrentPage('contact')}>Next <MdArrowRight /></button> : null}


        </div >
    )
}