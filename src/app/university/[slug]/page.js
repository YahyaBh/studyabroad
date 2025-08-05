'use client';

import { use, useEffect, useState } from 'react';
import Navbar from '@/app/comps/navbar/navbar';
import Footer from '@/app/comps/footer/footer';
import { client, urlFor } from '@/app/lib/sanityClient';

import './univ.scss';
import {
    FaFacebook,
    FaLinkedin,
    FaLocationArrow,
    FaPhone,
    FaStar,
    FaWeibo,
    FaWordpressSimple,
    FaTwitter,
} from 'react-icons/fa';
import { MdArrowOutward, MdOutlineUpload } from 'react-icons/md';
import CardUni from '@/app/comps/universityCard/CardUni';
import Loading from '@/app/comps/loading/page';

const page = ({ params }) => {
    const { slug } = use(params);
    const [university, setUniversity] = useState(null);
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await client.fetch(
                `*[_type == "university" && slug.current == $slug][0]{
            _id,
            name,
            slug,
            overview,
            description,
            images,
            country,
            city,
            address,
            phone,
            email,
            website,
            facebook,
            twitter,
            linkedin,
            admission_requirements,
            type,
            rankingGlobal,
            rankingLocal,
            rating,
            reviews,
            courses,
            tuition_fees,
            why_univ
        }`,
                { slug }
            );

            setUniversity(res);
        };

        const fetchUnis = async () => {
            const universities = await client.fetch(
                `*[_type == "university"]{
                    _id,
                    name,
                    "slug": slug.current,
                    logo,
                    country,
                    images,
                    city,
                    overview,
                    rankingGlobal
                    }[0...20]`
            )

            const shuffled = universities.sort(() => 0.5 - Math.random());
            const randomFour = shuffled.slice(0, 4);

            setUniversities(randomFour);
        }

        if (slug) {
            fetchData();
            fetchUnis();
        }
    }, [slug]);


    if (!university) return <Loading/>;

    return (
        <>

            <Navbar />


            <header className='uni-header'>

                <div className='header-container'>

                    <div className='left'>
                        <h2>{university?.name} <MdOutlineUpload /></h2>


                        <h3>Overview</h3>

                        <p>{university?.overview}</p>

                        <h3>Information</h3>

                        {/* <div className='line-h'></div> */}


                        <div className='info'>
                            <div className='info-item'>
                                <h4><FaWordpressSimple /> Country :</h4>
                                <h5>{university?.country}</h5>
                            </div>



                            <div className='info-item'>
                                <h4><FaWordpressSimple /> City :</h4>
                                <h5>{university?.city}</h5>
                            </div>



                            <div className='info-item'>
                                <h4><FaWordpressSimple /> Type Of University :</h4>
                                <h5>{university?.type} University</h5>
                            </div>
                        </div>

                        <div className='line-h'></div>


                        <div className='degree'>
                            <div className='info-item'>
                                <h4><FaWordpressSimple /> Degree's Offered :</h4>
                                <h5>{university?.courses?.map((course) => course.course).join(', ')} Courses</h5>
                            </div>


                            <div className='info-item'>
                                <h4><FaWordpressSimple /> Titution Fees :</h4>
                                <h5>Low</h5>
                            </div>
                        </div>

                        <div className='line-h'></div>


                        <div className='fields'>
                            <div className='info-item'>
                                <h4><FaWordpressSimple /> University Field :</h4>
                                <h5>Research University</h5>
                            </div>


                            <div className='info-item'>
                                <h4><FaWordpressSimple /> Level of Competition :</h4>
                                <h5>Average</h5>
                            </div>
                        </div>

                    </div>

                    <div className='right'>

                        <div className='images'>
                            <img className='main-image' src={urlFor(university?.images[0]).url()} alt={university?.name} />
                            <div className='images-container'>
                                {university?.images?.slice(1).map((image, index) => (
                                    <div key={index} className='image-wrapper'><img src={urlFor(image)} alt={university.name + index} /></div>
                                ))}
                            </div>

                        </div>

                        <div className='line-h'></div>

                        <h3>Contact Information</h3>

                        <div className='contact-info'>
                            <div className='contact-info-item'>
                                <h4><FaPhone /> {university?.phone}</h4>
                            </div>
                            <div className='contact-info-item'>
                                <h4><FaWeibo /> {university?.website}</h4>
                            </div>
                            <div className='contact-info-item'>
                                <div className='social-media'>
                                    {university?.facebook && <a href={university?.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>}
                                    {university?.twitter && <a href={university?.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
                                    {university?.instagram && <a href={university?.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                                    {university?.linkedin && <a href={university?.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
                                </div>
                            </div>
                        </div>


                    </div>

                </div>


            </header >


            <section className='informations-uni'>



                <div className='informations-container'>
                    <div className='left'>
                        <h3 className="title-main"><span className="line-l"></span> Rankings <span className="line-r"></span></h3>

                        <h2>{university?.name} Rankings Summary</h2>

                        <p>The QS World University Rankings, commonly referred to as the QS Rankings, evaluate and rank universities based on their overall performance, encompassing academic research and the quality of education. It is recognized as one
                            of the most widely used university ranking systems globally. The evaluation is based on key criteria, including :</p>

                        <div className='rules-list'>
                            <h4>1. Learning Quality</h4>
                            <h4>2. Research Output</h4>
                            <h4>3. Scientific Vision</h4>
                            <h4>4. Academic Reputition</h4>
                            <h4>5. Job Market Connection</h4>
                        </div>
                    </div>

                    <div className='right'>
                        <div className='line'></div>
                        <div className='cards'>
                            {
                                university?.rankingLocal &&
                                <div className='rank'>
                                    <div className='content'>
                                        <h5>The local university ranking</h5>
                                        <h3>{university.rankingLocal}</h3>
                                        <h5>the university ranked</h5>
                                    </div>
                                    <img src='/assets/images/Uni/Rank1.png' />
                                </div>
                            }
                            {
                                university?.rankingGlobal &&
                                <div className='rank'>
                                    <div className='content'>
                                        <h5>The worldwide university ranking</h5>
                                        <h3>{university.rankingGlobal}</h3>
                                        <h5>the university ranked</h5>
                                    </div>
                                    <img src='/assets/images/Uni/Rank1.png' />
                                </div>
                            }

                        </div>
                        <div className='line'></div>

                    </div>
                </div>

            </section>


            <section className='description-uni'>

                <div className='description-uni-container'>
                    <h3 className="title-main"><span className="line-l"></span> Description <span className="line-r"></span></h3>

                    <h2>{university?.name}.</h2>

                    <p>{university?.description}</p>


                </div>

            </section>


            <section className='degrees-offered'>

                <div className='degrees-offered-container'>
                    <div className='left'>
                        <h3 className="title-main"><span className="line-l"></span> Degrees Offered <span className="line-r"></span></h3>

                        <h2>Degrees Offered by {university?.name}</h2>

                        <p>{university?.name} always supports empowering students to discover opportunities that will shape their future through world-class academic programs offered by the university, which include the following :</p>
                    </div>

                    <div className='right'>
                        <div className='cards-cont'>

                            {university?.courses?.map((course , index) => (
                                <div className='card' key={index}>
                                    <img src='/assets/images/Uni/Rank1.png' />
                                    <h3>{course.course}'s Degree</h3>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                </div>

            </section>

            <div className='line-div'></div>

            <section className='uni-req'>
                <h3 className="title-main"><span className="line-l"></span> Description <span className="line-r"></span></h3>

                <div className='req-container'>
                    <div className='top-cont'>
                        <div className='left'>
                            <h2>Admission Requirements at {university?.name}</h2>

                            <p>Admission requirements for each program at {university?.name} vary depending on the field of study. However, here are the main requirements that prospective students must meet :</p>
                        </div>

                        <div className='right'>
                            {/* {university?.requirements[0]} */}
                            <div className='card'>
                                <img src='/assets/images/Uni/Rank1.png' />
                                <h4>For the TOEFL iBT exam, a minimum score of 90 is required, with at least 22 in Writing, 22 in Reading, 22 in Listening, and 22 in Speaking. </h4>
                            </div>
                        </div>
                    </div>

                    <div className='bottom-cont'>
                        {/* remove the first one and keep the others and map them each one onto a card */}
                        {university?.admission_requirements.map((req , index) => (
                            <div className='card' key={req.title + index}>
                                <img src='/assets/images/Uni/Rank1.png' />
                                <h4>{req.title}</h4>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className='fees'>
                <h3 className="title-main"><span className="line-l"></span> Fees <span className="line-r"></span></h3>

                <div className='fees-container'>
                    <div className='left'>
                        <h2>Tuition Fees at {university?.name}</h2>

                        <p>Undoubtedly, studying abroad is a significant investment, but it requires thorough research and planning. Students must manage their finances and budget, which is why {university?.name} has developed a calculator that allows students to determine the tuition fees for the program they plan to pursue.
                            It is important to note that the cost of studying at {university?.name} largely depends on the program students intend to study, as well as the academic degree they pursue. However, in general, the estimated tuition fees at {university?.name} are approximately 1,000 AUD, which equals around 719 USD annually, in addition to other fees that students may need.
                            The Opportunity platform has provided estimated costs related to other expenses:</p>
                    </div>

                    <div className='right'>
                        <div className='cards-container'>
                            {university?.tuition_fees.map((fee , index) => (
                                <div className='card' key={fee.fee_for + index}>
                                    <h5>{fee.fee_for}:</h5>
                                    <h3>{fee.fee}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            <section className='why'>
                <h3 className="title-main"><span className="line-l"></span> Why {university?.name} <span className="line-r"></span></h3>

                <div className='why-container'>
                    <div className='left'>
                        <h2>Why Choose {university?.name}: Benefits and Challenges for International Students</h2>

                        <p>{university?.why_univ}</p>
                    </div>

                    <div className='right'>
                        <img src='/assets/images/Uni/WhyImage.svg' />

                    </div>

                </div>
            </section>


            <section className='scholarship'>

                <div className='scholarship-container'>


                    <div className='left'>
                        <img src='/assets/images/Uni/ScholarshipImage.svg' />

                    </div>

                    <div className='right'>

                        <h3 className="title-main"><span className="line-l"></span> Scholarship <span className="line-r"></span></h3>

                        <h2>Scholarships Offered by {university?.name}</h2>

                        <p>{university?.name} provides a variety of scholarships for students.</p>

                        <button>Learn More</button>
                    </div>

                </div>
            </section>


            {university?.graduates > 0 &&
                <section className='graduates'>

                    <h3 className="title-main"><span className="line-l"></span> Top Graduates <span className="line-r"></span></h3>


                    <div className='graduates-container'>

                        <h2>Notable Alumni of {university?.name}</h2>

                        <h4>When talking about a prestigious university like {university?.name},
                            which we’ve explored today, it's no surprise that it has graduated and shaped generations of leading figures in their communities.
                            Some of the most notable of these figures include:</h4>


                        <div className='bottom-content'>
                            <div className='per-card'>
                                <img src='/assets/images/About/PERSONTEST.png' />

                                <div className='text'>
                                    <h3>Dr. Nada Al-Azab</h3>
                                    <h5>A dedicated professional with expertise in global education trends, committed to student success.</h5>
                                </div>
                            </div>

                            <div className='per-card'>
                                <img src='/assets/images/About/PERSONTEST.png' />
                                <div className='text'>
                                    <h3>Dr. Nada Al-Azab</h3>
                                    <h5>A dedicated professional with expertise in global education trends, committed to student success.</h5>
                                </div>
                            </div>

                            <div className='per-card'>
                                <img src='/assets/images/About/PERSONTEST.png' />
                                <div className='text'>
                                    <h3>Dr. Nada Al-Azab</h3>
                                    <h5>A dedicated professional with expertise in global education trends, committed to student success.</h5>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>}

            <section className="universities">
                <div className="universities-container">

                    <h2>World Universities Guide</h2>

                    <p>Explore top universities worldwide, including in the US, UK, and Arab countries, with details on admissions, programs, fees, and scholarships.</p>



                    <div className="universities-cards">
                        {universities.map((university, index) => (
                            <CardUni university={university} index={index} key={university.name +  index} />
                        ))
                        }
                    </div>

                    <button className="explore">Explore The Countries</button>

                </div>
            </section>
            <Footer />

        </>
    )
}

export default page