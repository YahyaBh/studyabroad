'use client'
import React, { useEffect, useState } from "react"
import Navbar from "../comps/navbar/navbar"
import './page.scss'
import { MdArrowBack, MdArrowRight } from "react-icons/md"
import { AnimatePresence, motion } from "framer-motion"

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for the calendar
import { validate } from 'react-email-validator';
import { formatPhoneNumber } from 'react-phone-number-input'

const page = () => {

    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState();
    const [country, setCountry] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [payment, setPayment] = useState();
    const [meetLink, setMeetLink] = useState(null);



    const [user, setUser] = useState({
        country: '',
        name: '',
        phone: '',
        email: '',
        study_level: '',
        study_field: '',
        grade: '',
        meeting: '',
        date: '',
        time: '',
        payment: '',
    });



    const steps = ['country', 'contact', 'date', 'payment', 'complete'];
    const currentIndex = steps.indexOf(currentPage);

    useEffect(() => {
        setCurrentPage('country');
    }, []);



    const sendVerificationEmail = async () => {
        setLoading(true);


        try {
            const response = await fetch('/api/send-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ clientEmail: user.email }),
            });

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])

            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }

        setLoading(false);
    };



    return (
        <>
            <Navbar />

            <div className="gen-cont">
                <div className="back-img">


                    <div className="progress-bar">
                        {steps.map((step, index) => (
                            <React.Fragment key={step + index}>
                                <div
                                    className={index <= currentIndex ? 'step active' : 'step'}
                                    onClick={() => {
                                        if (index < currentIndex) {
                                            setCurrentPage(step);
                                        }
                                    }}
                                    style={{
                                        cursor: index < currentIndex ? 'pointer' : 'not-allowed',
                                        opacity: index > currentIndex ? 0.5 : 1,
                                    }}
                                >
                                    <span className="number">{index + 1}</span>
                                    <span className="text">
                                        {step === `country`
                                            ? 'Choose Country'
                                            : step === `contact`
                                                ? 'Contact Details'
                                                : step === `date`
                                                    ? 'Choose Date'
                                                    : step === `payment`
                                                        ? 'Payment'
                                                        : step === `complete`
                                                            ? 'Complete'
                                                            : ''}
                                    </span>
                                </div>
                                {index < steps.length - 1 && <div className="line"></div>}
                            </React.Fragment>
                        ))}
                    </div>



                    <AnimatePresence mode="wait">
                        {currentPage === 'country' && (
                            <CountryPage key="country" country={country} setCountry={setCountry} setCurrentPage={setCurrentPage} />
                        )}
                        {currentPage === 'contact' && (
                            <ContactPage key="contact" country={country} setCurrentPage={setCurrentPage} user={user} setUser={setUser} />
                        )}
                        {currentPage === 'date' && (
                            <DatePage key="date" country={country} setCurrentPage={setCurrentPage} date={date} setDate={setDate} time={time} setTime={setTime} />
                        )}
                        {currentPage === 'payment' && (
                            <PaymentPage key="payment" country={country} setCurrentPage={setCurrentPage} date={date} time={time} payment={payment} setPayment={setPayment} />
                        )}
                        {currentPage === 'complete' && (
                            <EmailVerification key="complete" sendVerificationEmail={sendVerificationEmail} />
                        )}
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
            exit={{ opacity: 0, y: -20 }}
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

                {
                    country && (
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setCurrentPage('contact')} className="next-but">
                            Next <MdArrowRight />
                        </motion.button>
                    )
                }

            </section >



        </motion.div >
    )
}

const ContactPage = ({ country, setCurrentPage, setUser, user }) => {



    const FullNameFunc = (e) => {
        const words = e.trim().split(/\s+/);
        if (words.length <= 2) {
            setUser({ ...user, name: e });
        } else {
            console.error('Enter a valid name');
        }
    };

    const EmailFunc = (e) => {
        setUser({ ...user, email: e });



    };

    const PhoneFunc = (e) => {
        setUser({ ...user, phone: e });


    }

    return (
        <motion.div className="page-cont"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h2>Fill in your contact information So we contact you right away</h2>

            <section className="infos-cont">
                <div className="inps">
                    <div className="inp">
                        <label>Full Name</label>
                        <input type="text" placeholder="Jhon Smith" value={user.name} onChange={(e) => FullNameFunc(e.target.value)} />
                    </div>

                    <div className="inp">
                        <label>Email Address</label>
                        <input type="email" placeholder="example@email.com" value={user.email} onChange={(e) => EmailFunc(e.target.value)} />
                    </div>

                    <div className="inp">
                        <label>Phone Number</label>
                        <input type="number" placeholder="+212 600 000 000" value={user.phone} onChange={(e) => PhoneFunc(e.target.value)} />
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

                {country ? <button className="prev-but" onClick={() => setCurrentPage('date')}> <MdArrowBack /></button> : null}

                {country ? <button className="next-but" onClick={() => setCurrentPage('date')}>Next <MdArrowRight /></button> : null}

            </section >



        </motion.div >
    )
}

const DatePage = ({ country, setDate, date, setTime, time, setCurrentPage }) => {

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());


    const disableWeekends = ({ date }) => {
        const day = date.getDay();
        return day === 0 || day === 6; // Disable Sunday (0) and Saturday (6)
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
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
                        minDate={tomorrow}
                        maxDate={maxDate} // Show only month view
                        tileDisabled={disableWeekends}
                        className="minimal-calendar"
                    />
                </div>

                <div className="time-container">
                    {date ? <>
                        <h4>Time</h4>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="time-slots">
                            <button className={time === '10:00' ? 'time-slot selected' : 'time-slot'} onClick={!time ? () => setTime('10:00') : () => setTime()} >10:00</button>
                            <button className={time === '11:00' ? 'time-slot selected' : 'time-slot'} onClick={!time ? () => setTime('11:00') : () => setTime()} >11:00</button>
                            <button className={time === '12:00' ? 'time-slot selected' : 'time-slot'} onClick={!time ? () => setTime('12:00') : () => setTime()} >12:00</button>
                            <button className={time === '13:00' ? 'time-slot selected' : 'time-slot'} onClick={!time ? () => setTime('13:00') : () => setTime()} >13:00</button>
                        </motion.div></> : <><h4>Time</h4></>}
                </div>
            </div>

            {
                country && date && time && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setCurrentPage('payment')} className="next-but">
                        Next <MdArrowRight />
                    </motion.button>
                )
            }
        </motion.div >
    )
}

const PaymentPage = ({ country, date, time, setPayment, payment, setCurrentPage }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="page-cont">


            <h2>You'll be directly notified after the payment for the next steps</h2>

            <div className="payment-container">

                <div className="inps">
                    <div className="inp">
                        <label>Choose your payment method</label>

                        <label className="option" onClick={() => setPayment('Meeting')}>
                            <input type="radio" name="meeting" value="Meeting" />
                            <span className="text">Bank Transfer</span>
                        </label>
                        <label className="option" onClick={() => setPayment('Cash')}>
                            <input type="radio" name="meeting" value="Agency" />
                            <span className="text">Cash (in Agency)</span>
                        </label>

                    </div>
                </div>

            </div>

            {
                country && date && time && payment && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setCurrentPage('complete')} className="next-but">
                        Next <MdArrowRight />
                    </motion.button>
                )
            }

        </motion.div>
    )
}


const EmailVerification = ({ sendVerificationEmail }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="page-cont">

            <h2>You'll receive a verification email</h2>


            <div className="email-container" >
                <img src="/assets/images/Consult/EmailSVG.svg" />

                <p>Alle'nora has been a titan in Pakistan's fashion industry since the 90's. Boasting a rich history of over 30 years in business.</p>

                <button className="confirm-email" onClick={() => sendVerificationEmail()}>Confirm Email</button>

            </div>


        </motion.div>
    )
}
