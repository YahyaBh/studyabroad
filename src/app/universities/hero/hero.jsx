"use client"

import { useEffect, useState } from "react"
import "./hero.scss"
import Navbar from "@/app/comps/navbar/navbar"
import { MdKeyboardArrowDown } from "react-icons/md"
import { FaSearch } from "react-icons/fa"
import { client } from "@/app/lib/sanityClient"

export default function HeroSection() {


    const [countries, setCountries] = useState([])
    const [programs, setPrograms] = useState([])


    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedProgram, setSelectedProgram] = useState("")

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {


        const data = await client.fetch(`*[_type == "university"]{
            courses[]{course},
            country,
        }`)



        // Get unique countries
        const countriesSet = new Set(data.map(univ => univ.country).filter(Boolean))
        setCountries(Array.from(countriesSet))

        // Get unique programs
        const allPrograms = data.flatMap(u => u.courses?.map(c => c.course) || []);
        setPrograms(Array.from(new Set(allPrograms)));


        console.log(allPrograms);

    };




    const handleSearch = () => {

        if (selectedCountry && selectedProgram) {
            window.location.href = `/universities?country=${selectedCountry}&program=${selectedProgram}`
        } else if (selectedCountry) {
            window.location.href = `/universities?country=${selectedCountry}`
        } else if (selectedProgram) {
            window.location.href = `/universities?program=${selectedProgram}`
        } else {
            toast.error("Please select a country or program")
        }


    }

    return (
        <>
            <div className="hero-container">
                <div className="left">
                    <h2>Explore Study <br /><span>Destinations</span></h2>
                    <p>Discover the opportunities and benefits of studying in your dream country.</p>

                    <div className="search-container">
                        <label className="sidedrop">
                            Country
                            <select className="select" onChange={(e) => setSelectedCountry(e.target.value)}>
                                <option value="">Select Country</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country}>{country}</option>
                                ))}
                            </select>
                        </label>

                        <div className="line"></div>

                        <label className="sidedrop">
                            Program
                            <select className="select" onChange={(e) => setSelectedProgram(e.target.value)}>
                                <option value="">Select Program</option>
                                {programs.map((program, index) => (
                                    <option key={index} value={program}>{program}</option>
                                ))}
                            </select>
                        </label>

                        <button onClick={handleSearch}><FaSearch /></button>
                    </div>
                </div>
                <div className="right">
                    <img src="/assets/images/Unis/backpack.svg" alt="Backpack Icon" />
                </div>

            </div>
        </>
    )
}
