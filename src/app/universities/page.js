import Footer from '../comps/footer/footer'
import Navbar from '../comps/navbar/navbar'
import './page.scss'
import "./university.scss"
import HeroSection from './hero/hero'
const page = () => {

    const universities = [
        {
            id: 1,
            image: "https://placehold.co/300x200/EEE/31343C",
            country: "Korea",
            flag: "🇰🇷",
            name: "Korea University",
            description:
                "Korea University, established in 1905, is a private research university located in Seoul, the capital of South Korea.",
            rating: 5,
        },
        {
            id: 2,
            image: "https://placehold.co/300x200/EEE/31343C",
            country: "Malaysia",
            flag: "🇲🇾",
            name: "New South Wales",
            description:
                "UTAB is a non-profit private university in Malaysia, founded in 2002 with the motto 'A University for the People, by the People'.",
            rating: 5,
        },
        {
            id: 3,
            image: "https://placehold.co/300x200/EEE/31343C",
            country: "Italy",
            flag: "🇮🇹",
            name: "University of Bologna",
            description:
                "The University of Bologna, founded in 1088, is the oldest university in Europe and a key institution in higher education.",
            rating: 5,
        },
        {
            id: 4,
            image: "https://placehold.co/300x200/EEE/31343C",
            country: "Canada",
            flag: "🇨🇦",
            name: "University of Toronto",
            description: "The prestigious University of Toronto is one of the most renowned public universities in Canada.",
            rating: 5,
        },
        {
            id: 5,
            image: "https://placehold.co/300x200/EEE/31343C",
            country: "USA",
            flag: "🇺🇸",
            name: "University of California, Berkeley",
            description:
                "UC Berkeley is a public land-grant research university in the United States, founded in 1868.",
            rating: 5,
        },
        {
            id: 6,
            image: "https://placehold.co/300x200/EEE/31343C",
            country: "USA",
            flag: "🇺🇸",
            name: "University of California, Los Angeles",
            description:
                "UCLA is a public land-grant research university in the United States, founded in 1868.",
            rating: 5,
        },
        {
            id: 7,
            image: "https://placehold.co/300x200/EEE/31343C",
            country: "USA",
            flag: "🇺🇸",
            name: "University of California, San Diego",
            description:
                "UCSD is a public land-grant research university in the United States, founded in 1868.",
            rating: 5,
        },
        {
            id: 8,
            image: "https://placehold.co/300x200/EEE/31343C",
            country: "USA",
            flag: "🇺🇸",
            name: "University of California, Irvine",
            description:
                "UCI is a public land-grant research university in the United States, founded in 1868.",
            rating: 5,
        },
        {
            id: 9,
            image: "https://placehold.co/300x200/EEE/31343C",
            country: "USA",
            flag: "🇺🇸",
            name: "University of California, Davis",
            description:
                "UCD is a public land-grant research university in the United States, founded in 1868.",
            rating: 5,
        },
        {
            id: 10,
            image: "https://placehold.co/300x200/EEE/31343C",
            country: "USA",
            flag: "🇺🇸",
            name: "University of California, Santa Barbara",
            description:
                "UCSB is a public land-grant research university in the United States, founded in 1868.",
            rating: 5,
        },
    ]

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? "star-filled" : "star-empty"}>
                ★
            </span>
        ))
    }


    return (
        <>

            <Navbar />


            <HeroSection />

            

            <div className="container">
                <div className="header">
                    <h1 className="title">World Universities Guide</h1>
                    <p className="subtitle">
                        Explore top universities worldwide, including in the US, UK, and Arab countries,
                        <br />
                        with details on admissions, programs, fees, and scholarships.
                    </p>
                </div>

                <div className="grid">
                    {universities.map((university) => (
                        <div key={`row4-${university.id}`} className="card card-colored">
                            <div className="image-container">
                                <img src={university.image || "/placeholder.svg"} alt={university.name} className="university-image" />
                            </div>
                            <div className="card-content">
                                <div className="location">
                                    <span className="location-icon">📍</span>
                                    <span className="country">{university.country}</span>
                                </div>
                                <h3 className="university-name">{university.name> 10 ? university.name.slice(0, 10) + "..." : university.name}</h3>
                                <p className="description">{university.description.length > 60 ? university.description.slice(0, 60) + "..." : university.description}</p>
                                <div className="rating">{renderStars(university.rating)}</div>
                                <button className="learn-more-btn">
                                    Learn more
                                    <span className="arrow">→</span>
                                </button>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

            <Footer />

        </>
    )
}

export default page