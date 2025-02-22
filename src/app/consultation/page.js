'use client'
import React, { useEffect, useState } from "react"

import Navbar from "../comps/navbar/navbar"
import Loading from "../comps/loading/page"

import './page.scss'

import { MdArrowBack, MdArrowRight } from "react-icons/md"
import { AnimatePresence, motion } from "framer-motion"

import { validate } from 'react-email-validator';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { client, urlFor } from "../lib/sanityClient"
import { phone } from 'phone';
import { toast } from 'react-hot-toast';

const page = () => {


    const [loading, setLoading] = useState(true);


    const [data, setData] = useState();

    const [currentPage, setCurrentPage] = useState();
    const [country, setCountry] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [payment, setPayment] = useState();
    const [meetLink, setMeetLink] = useState(null);



    const [user, setUser] = useState({
        country: {
            _ref: "",
            _type: "reference"
        },
        name: 'ASd asd',
        phone: '21312312',
        email: 'yahyabouhsine@protonmail.com',
        study_level: {
            _ref: "",
            _type: "reference"
        },
        study_field: 'Economics',
        grade: '12.54',
        meeting: 'In Agency',
        date: '2025-10-05',
        time: '11:00',
        payment: 'Bank Transfer',
    });



    const steps = ['country', 'contact', 'date', 'payment', 'complete'];
    const currentIndex = steps.indexOf(currentPage);

    useEffect(() => {
        setCurrentPage('country');
        loadData();
    }, []);


    const loadData = async () => {
        const query = `*[_type == "consultation"] {
        title,
        description,
        countries[] -> {
        _id,
        name,
        code,
        image,
        description,
        },
        levels[]-> {
            _id,
            title,
        }
        }`;



        const consultData = await client.fetch(query);

        setData(consultData);

        setLoading(false);
    }



    const sendVerificationEmail = async () => {

        try {
            const response = await fetch('/api/send-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user: user }),
            });

            if (!response.ok) {
                console.log(response)
            }


            toast.success("EMAIL SENT SUCCESSFULLY")
        } catch (err) {
            console.error(err);
            toast.error("EMAIL DID NOT SENT , PLEASE TRY AGAIN")
        }

    };



    return (

        <>
            {loading ? <Loading /> : ''}
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
                            <CountryPage key="country" setUser={setUser} user={user} setCurrentPage={setCurrentPage} data={data} />
                        )}
                        {currentPage === 'contact' && (
                            <ContactPage key="contact" country={country} setCurrentPage={setCurrentPage} user={user} setUser={setUser} data={data} />
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


const CountryPage = ({ user, setUser, setCurrentPage, data }) => {


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="page-cont">
            <h2>Click on the country you are interested in studying in and choose the date.</h2>

            <section className="cards-cont">


                {data?.length > 0 && data[0]?.countries?.map((country, index) => (
                    <div key={country._id + index} className={user.country._ref === country._id ? 'active card' : 'card'} onClick={user.country._ref !== country._id ? () => setUser({ ...user, country: { _ref: country._id } }) : () => setUser({ ...user, country: { _ref: '' } })}>
                        <img src={country.image ? urlFor(country.image).url() : '/assets/images/Hero/GraduateGirl.png'} alt={country.name} />
                        <h3>{country.name}</h3>
                    </div>
                ))}

                {
                    user.country._ref && (
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

const ContactPage = ({ country, setCurrentPage, setUser, user, data }) => {


    const FullNameFunc = (e) => {
        const words = e.trim().split(/\s+/);
        if (words.length <= 2) {
            setUser({ ...user, name: e });
        } else {
            console.error('Enter a valid name');
        }
    };


    const gradeFunc = (e) => {
        let value = e.replace(/[^0-9]/g, '');

        if (value.length > 2) {
            value = value.slice(0, 2) + '.' + value.slice(2);
        }

        if (value.length > 5) {
            value = value.slice(0, 5);
        }

        setUser({ ...user, grade: value });
    }

    const handleSubmit = async (e) => {
        if (user.name) {
            if (validate(user.email)) {
                if (phone(user.phone)) {
                    if (user.study_level) {
                        if (user.study_field) {
                            if (user.grade) {
                                if (user.meeting) {
                                    setCurrentPage('date')
                                } else {
                                    alert('Please choose a meeting method')
                                }
                            } else {
                                alert('Enter a valid grade');
                            }
                        } else {
                            alert('Enter a valid study field');
                        }
                    } else {
                        alert('Enter choose a study field');
                    }
                } else {
                    alert('Enter a valid phone number');
                }
            } else {
                alert('please enter a valid email')
            }
        } else {
            alert('please enter a valid name')
        }
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
                        <input type="email" placeholder="example@email.com" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>

                    <div className="inp">
                        <label>Phone Number</label>
                        <input type="number" placeholder="+212 600 000 000" value={user.phone} maxLength={14} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                    </div>
                </div>

                <div className="inps">
                    <div className="inp">
                        <label>Study Level</label>
                        <select
                            name="level"
                            value={user.study_level._ref}
                            className={user.study_level._ref ? 'selected' : ''}
                            onChange={(e) => setUser({ ...user, study_level: { _ref: e.target.value } })}
                        >
                            <option disabled defaultValue hidden value="">
                                Please select
                            </option>
                            {data?.length > 0 &&
                                data[0]?.levels?.map((level, index) => (
                                    <option key={level._id} value={level._id}>
                                        {level.title}
                                    </option>
                                ))}
                        </select>
                    </div>



                    <div className="inp">
                        <label>Study Field</label>
                        <input type="text" placeholder="Economics" maxLength={40} value={user.study_field} onChange={(e) => setUser({ ...user, study_field: e.target.value })} />
                    </div>

                    <div className="inp">
                        <label>Grade</label>
                        <input type="text" placeholder="16.45" maxLength={5} value={user.grade} onChange={(e) => gradeFunc(e.target.value)} />
                    </div>
                </div>

                <div className="inps">
                    <div className="inp">
                        <label>I want my meeting to be</label>

                        <label className="option" onClick={(e) => setUser({ ...user, meeting: 'meeting' })}>
                            <input type="radio" name="meeting" value="Meeting" />
                            <span className="text">Online Meeting</span>
                        </label>
                        <label className="option" onClick={(e) => setUser({ ...user, meeting: 'agency' })}>
                            <input type="radio" name="meeting" value="Agency" />
                            <span className="text">In Agency</span>
                        </label>

                    </div>
                </div>

                <button className="prev-but" onClick={() => setCurrentPage('country')}> <MdArrowBack /></button>

                {user.country._ref ? <button className="next-but" onClick={() => handleSubmit()}>Next <MdArrowRight /></button> : null}

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
        return day === 0 || day === 6;
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
                        maxDate={maxDate}
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
                date && time && (
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

const PaymentPage = ({ setPayment, payment, setCurrentPage }) => {
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
                payment(
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
