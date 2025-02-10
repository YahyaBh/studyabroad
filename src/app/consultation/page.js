'use client'
import React, { useEffect, useState } from "react"
import Navbar from "../comps/navbar/navbar"
import './page.scss'
import { MdArrowRight } from "react-icons/md"
import { AnimatePresence, motion } from "framer-motion"

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for the calendar


const page = () => {

    const [currentPage, setCurrentPage] = useState();
    const [country, setCountry] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();


    const steps = ['country', 'contact', 'date', 'payment'];
    const currentIndex = steps.indexOf(currentPage);

    useEffect(() => {
        setCurrentPage('country');
    }, []);






    return (
        <>
            <Navbar />

            <div className="gen-cont">
                <div className="back-img">


                    {/* <div className="progress-bar">
                        {steps.map((step, index) => (
                            <>
                                <div
                                    key={step + 'L'}
                                    className={index <= currentIndex ? 'step active' : 'step'}
                                    onClick={() => {
                                        if (index < currentIndex) { // Allow only previous steps
                                            setCurrentPage(step);
                                        }
                                    }}
                                    style={{ cursor: index < currentIndex ? 'pointer' : 'not-allowed', opacity: index > currentIndex ? 0.5 : 1 }}
                                >
                                    <span className="number">{index + 1}</span>
                                    <span className="text">{step === `country` ? 'Choose Country' : step === `contact` ? 'Contact Details' : step === `date` ? 'Choose Date' : step === `payment` ? 'Payment' : step === `complete` ? 'Complete' : ''}</span>
                                </div>
                                {index < steps.length - 1 && <div className="line"></div>}
                            </>
                        ))}
                    </div> */}


                    <AnimatePresence mode="wait">
                        {currentPage === 'country' && (
                            <CountryPage key="country" country={country} setCountry={setCountry} setCurrentPage={setCurrentPage} />
                        )}
                        {currentPage === 'contact' && (
                            <ContactPage key="contact" country={country} setCurrentPage={setCurrentPage} />
                        )}
                        {currentPage === 'date' && (
                            <DatePage key="date" country={country} setCurrentPage={setCurrentPage} date={date} setDate={setDate} time={time} setTime={setTime} />
                        )}
                        {/* {currentPage === 'payment' && (
                            <PaymentPage key="payment" country={country} setCurrentPage={setCurrentPage} />
                        )}
                        {currentPage === 'complete' && (
                            <CompletePage key="complete" country={country} setCurrentPage={setCurrentPage} />
                        )} */}
                    </AnimatePresence>

                </div>

            </div>
        </>
    )
}

export default page


const CountryPage = ({ country, setCountry, setCurrentPage }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Fade out on exit
            transition={{ duration: 0.3 }}
            className="page-cont">
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

            {country ? <button className="next-but" onClick={() => setCurrentPage('contact')}>Next <MdArrowRight /></button> : null}


        </motion.div >
    )
}

const ContactPage = ({ country, setCurrentPage }) => {
    return (
        <motion.div className="page-cont"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Fade out on exit
            transition={{ duration: 0.3 }}
        >
            <h2>Fill in your contact information So we contact you right away</h2>

            <section className="infos-cont">
                <div className="inps">
                    <div className="inp">
                        <label>Full Name</label>
                        <input type="text" placeholder="Jhon Smith" />
                    </div>

                    <div className="inp">
                        <label>Email Address</label>
                        <input type="email" placeholder="example@email.com" />
                    </div>

                    <div className="inp">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+212 600 000 000" />
                    </div>
                </div>

                <div className="inps">
                    <div className="inp">
                        <label>Study Level</label>
                        <input type="text" placeholder="Baccalaurete" />
                    </div>

                    <div className="inp">
                        <label>Study Field</label>
                        <input type="text" placeholder="Economics" />
                    </div>

                    <div className="inp">
                        <label>Grade</label>
                        <input type="text" placeholder="16.45" />
                    </div>
                </div>

                <div className="inps">
                    <div className="inp">
                        <label>I want my meeting to be</label>

                        <label className="option">
                            <input type="radio" name="meeting" value="Meeting" />
                            <span className="text">Online Meeting</span>
                        </label>
                        <label className="option">
                            <input type="radio" name="meeting" value="Agency" />
                            <span className="text">In Agency</span>
                        </label>

                    </div>
                </div>
            </section >

            {country ? <button className="next-but" onClick={() => setCurrentPage('date')}>Next <MdArrowRight /></button> : null}


        </motion.div >
    )
}
const DatePage = ({ country, setDate, date, setTime, time, setCurrentPage }) => {

    const today = new Date();
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());


    const disableWeekends = ({ date }) => {
        const day = date.getDay();
        return day === 0 || day === 6; // Disable Sunday (0) and Saturday (6)
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} // Fade out on exit
            transition={{ duration: 0.3 }}
            className="page-cont"

        >
            <h2>Choose the most suitable date for you so we get in touch</h2>

            <div className="calendar-container">

                <div className="calendar">
                    <Calendar
                        onChange={setDate}
                        value={date}
                        prevLabel={'<'}
                        nextLabel={'>'}
                        minDate={today}
                        maxDate={maxDate} // Show only month view
                        tileDisabled={disableWeekends}
                        className="minimal-calendar"
                    />
                </div>

                <div className="time-container">
                    {date ? <>
                        <h4>Time</h4>
                        <div className="time-slots">
                            <button className={time === '10:00' ? 'time-slot selected' : 'time-slot'} onClick={!time ? () => setTime('10:00') : () => setTime()} >10:00</button>
                            <button className={time === '10:00' ? 'time-slot selected' : 'time-slot'} onClick={!time ? () => setTime('11:00') : () => setTime()} >11:00</button>
                            <button className={time === '10:00' ? 'time-slot selected' : 'time-slot'} onClick={!time ? () => setTime('12:00') : () => setTime()} >12:00</button>
                            <button className={time === '10:00' ? 'time-slot selected' : 'time-slot'} onClick={!time ? () => setTime('13:00') : () => setTime()} >13:00</button>
                        </div></> : <><h4>Time</h4></>}
                </div>
            </div>

            {
                country && (
                    <button onClick={() => setCurrentPage('payment')} className="next-but">
                        Next <MdArrowRight />
                    </button>
                )
            }
        </motion.div >
    )
}
