"use client"

import { useState } from "react"
import "./hero.scss"
import Navbar from "@/app/comps/navbar/navbar"
import { MdKeyboardArrowDown } from "react-icons/md"
import { FaSearch } from "react-icons/fa"

export default function HeroSection() {

    const [countryOpen, setCountryOpen] = useState(false)
    const [programOpen, setProgramOpen] = useState(false)

    const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany"]
    const programs = ["Bachelor's Degree", "Master's Degree", "PhD Program", "Certificate Course", "Diploma Program"]


    const [formData, setFormData] = useState({
        programs: "",
        country: "",
        universityType: "",
        budget: "",
    })

    const handleSelectChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSearch = () => {
        console.log("Search with:", formData)
    }

    return (
        <>
            <div className="hero-container">
                <div className="left">
                    <h2>Explore Study <br /><span>Destinations</span></h2>
                    <p>Discover the opportunities and benefits of studying in your dream country.</p>

                    <div className="search-container">

                        <div className="search-input" onClick={() => setCountryOpen(!countryOpen)} onBlur={() => setCountryOpen(!countryOpen)}>
                            <label>Country</label>
                            <div className="dropdown">
                                <div className="dropdown-btn" >
                                    {formData.country ? formData.country : <span style={{ opacity: '.6' }}>Choose Country</span>}
                                    <MdKeyboardArrowDown />
                                </div>
                                <div className={`dropdown-content ${countryOpen ? 'active' : ''}`}>
                                    {countries.map((country) => (
                                        <div
                                            key={country}
                                            onClick={() => {
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    country: country,
                                                }))
                                                setCountryOpen(false);
                                            }}
                                            className="dropdown-item"
                                        >
                                            {country}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className="search-input" onBlur={() => setProgramOpen(!programOpen)} onClick={() => setProgramOpen(!programOpen)}>
                            <label>Country</label>
                            <div className="dropdown">
                                <div className="dropdown-btn" >
                                    {formData.programs ? formData.programs : <span style={{ opacity: '.6' }}>Choose Progam</span>}
                                    <MdKeyboardArrowDown />
                                </div>
                                <div className={`dropdown-content ${programOpen ? 'active' : ''}`}>
                                    {programs.map((program) => (
                                        <div
                                            key={program}
                                            onClick={() => {
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    programs: program,
                                                }))
                                                setProgramOpen(false);
                                            }}
                                            className="dropdown-item"
                                        >
                                            {program}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <button className="search-button" onClick={handleSearch}>
                            <span className="search-icon"><FaSearch /> </span>
                        </button>
                    </div>
                </div>
                <div className="right">
                    <img src="/assets/images/Unis/backpack.svg" alt="Backpack Icon"/>
                </div>

            </div>
        </>
    )
}
