'use client'
import React, { useEffect, useState } from "react"
import Navbar from "../comps/navbar/navbar"
import './page.scss'

const page = () => {

    const [currentPage, setCurrentPage] = useState();

    const [country, setCountry] = useState();

    useEffect(() => {
        setCurrentPage('country');
    }, []);

    return (
        <>
            <Navbar />
            {/* 
            <div className="progress-bar">
                <div className="container">
                    <div className={currentPage === 'country' ? 'active' : ''} ><span>1</span> <h3>Select country</h3>
                        <div className="line" ></div>
                    </div>
                    <div className={currentPage === 'contact' ? 'active' : ''}><span>2</span> <h3>Contact information</h3>
                        <div className="line" ></div>
                    </div>
                    <div className={currentPage === 'payment' ? 'active' : ''}><span>3</span> <h3>Select Date</h3>
                        <div className="line" ></div>
                    </div>
                    <div className={currentPage === 'payment' ? 'active' : ''}><span>4</span> <h3>Payment</h3></div>

                </div>
            </div> */}

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


                    {currentPage === 'country' && <CountryPage country={country} setCountry={setCountry} />}
                </div>

            </div>
        </>
    )
}

export default page


const CountryPage = ({country , setCountry}) => {
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
        </div >
    )
}