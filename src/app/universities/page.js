'use client'

import { useEffect, useState } from 'react'
import Footer from '../comps/footer/footer'
import Navbar from '../comps/navbar/navbar'
import HeroSection from './hero/hero'
import Loading from '../comps/loading/page'
import { client } from '../lib/sanityClient'
import './page.scss'
import "./university.scss"
import { FaSearch } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import CardUni from '../comps/universityCard/CardUni'

const Page = () => {
    const [country, setCountry] = useState('');
    const [program, setProgram] = useState('');
    const [type, setType] = useState('');
    const [budget, setBudget] = useState('');


    const [loading, setLoading] = useState(true);
    const [universities, setUniversities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(country || "");
    const [selectedProgram, setSelectedProgram] = useState(program || "");
    const [selectedType, setSelectedType] = useState(type || "");
    const [selectedBudget, setSelectedBudget] = useState(budget || "");

    const [countries, setCountries] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [types, setTypes] = useState([]);
    const [budgets, setBudgets] = useState(["0-2000", "2000-5000", "5000-10000"]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setCountry(params.get('country') || '');
        setProgram(params.get('program') || '');
        setType(params.get('type') || '');
        setBudget(params.get('budget') || '');

        getNavData();
    }, [])

    useEffect(() => {
        loadData();
    }, [country, program, type, budget]);

    const loadData = async () => {
        setLoading(true);
        let query = `*[_type == "university"`;

        if (country) query += ` && country == \"${country}\"`;
        if (program) query += ` && courses[].course match \"${program}\"`;
        if (type) query += ` && type == \"${type}\"`;
        if (budget) {
            const [min, max] = budget.split('-');
            query += ` && tuition_fees[0].fee >= ${min} && tuition_fees[0].fee <= ${max}`;
        }

        query += `] {
            _id,
            name,
            slug,
            city,
            country,
            type,
            overview,
            description,
            rating,
            courses[]{course},
            tuition_fees[]{fee_for, fee},
            images[]{ asset->{ url } }
        }`;

        try {
            const univs = await client.fetch(query);
            setUniversities(univs);
        } catch (error) {
            console.error("Failed to load universities:", error);
        } finally {
            setLoading(false);
        }
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? "star-filled" : "star-empty"}>★</span>
        ));
    };

    const handleSearch = () => {
        const queryParams = new URLSearchParams();
        if (selectedCountry) queryParams.append("country", selectedCountry);
        if (selectedProgram) queryParams.append("program", selectedProgram);
        if (selectedType) queryParams.append("type", selectedType);
        if (selectedBudget) queryParams.append("budget", selectedBudget);
        window.location.href = `/universities?${queryParams.toString()}`;
    };

    const getNavData = async () => {
        const data = await client.fetch(`*[_type == "university"]{
            country,
            type,
            courses[]{course},
        }`)

        const countriesSet = new Set(data.map(u => u.country).filter(Boolean));
        setCountries(Array.from(countriesSet));

        const allPrograms = data.flatMap(u => u.courses?.map(c => c.course) || []);
        setPrograms(Array.from(new Set(allPrograms)));

        const typeSet = new Set(data.map(u => u.type).filter(Boolean));
        setTypes(Array.from(typeSet));
    };

    return (
        loading ? <Loading /> : (
            <>
                <Navbar />

                {(country || program || type || budget) ? (
                    <nav className='search-bar'>
                        <div className="search-container">
                            <label className="sidedrop">
                                Country
                                <select className="select" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                                    <option value="">Select Country</option>
                                    {countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
                                </select>
                            </label>
                            <div className="line"></div>

                            <label className="sidedrop">
                                Program
                                <select className="select" value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)}>
                                    <option value="">Select Program</option>
                                    {programs.map((p, i) => <option key={i} value={p}>{p}</option>)}
                                </select>
                            </label>
                            <div className="line"></div>

                            <label className="sidedrop">
                                Type
                                <select className="select" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                                    <option value="">Select Type</option>
                                    {types.map((t, i) => <option key={i} value={t}>{t}</option>)}
                                </select>
                            </label>
                            <div className="line"></div>

                            <label className="sidedrop">
                                Budget
                                <select className="select" value={selectedBudget} onChange={(e) => setSelectedBudget(e.target.value)}>
                                    <option value="">Select Budget</option>
                                    {budgets.map((b, i) => <option key={i} value={b}>{b}</option>)}
                                </select>
                            </label>

                            <button onClick={handleSearch}><FaSearch /></button>
                        </div>
                    </nav>
                ) : (
                    <HeroSection program={program} country={country} />
                )}

                <div className="container">
                    <div className="header">
                        <h1 className="title">World Universities Guide</h1>
                        <p className="subtitle">
                            Explore top universities worldwide including in the US, UK, and Arab countries,
                            with details on admissions, programs, fees, and scholarships.
                        </p>
                    </div>

                    <motion.div className="universities-cards" layout>
                        <AnimatePresence>
                            {universities.map((university, index) => {
                                return (
                                    <motion.div
                                        key={university._id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CardUni university={university} index={index} />
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>
                <Footer />
            </>
        )
    );
}

export default Page;
