import Navbar from '@/app/comps/navbar/navbar';
import Footer from '@/app/comps/footer/footer';
import { MdArrowOutward, MdOutlineUpload } from 'react-icons/md';

import './page.scss'
import { FaFacebook, FaLinkedin, FaLocationArrow, FaPhone, FaStar, FaWeibo, FaWordpressSimple } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const page = ({ params }) => {
    console.log("Params:", params); // Debugging

    if (!params || !params.slug) return <p>Loading...</p>;

    

    return (
        <>

            <Navbar />


            <header>

                <div className='header-container'>

                    <div className='left'>
                        <h2>{params.slug} <MdOutlineUpload /></h2>


                        <h3>Overview</h3>

                        <p>University of New South Wales (UNSW) Summary
                            The University of New South Wales (UNSW), founded in 1949, is a prominent public research university located in Sydney, Australia. It is well-regarded for its commitment to research and innovation. As a member of the Commonwealth Universities Association, which includes over 480 universities, UNSW fosters international collaboration in higher education and offers various technical and consulting services.
                            With a strong international reputation, UNSW attracts a significant number of international students, making it one of the most sought-after universities in Australia. The university provides a diverse range of disciplines, particularly excelling in medical education, and is positioned at the forefront of this field both locally and globally.</p>

                        <h3>Information</h3>

                        <div className='line-h'></div>


                        <div className='info'>
                            <div className='info-item'>
                                <h4><FaWordpressSimple /> Country :</h4>
                                <h5>Australia</h5>
                            </div>



                            <div className='info-item'>
                                <h4><FaWordpressSimple /> City :</h4>
                                <h5>Sydney</h5>
                            </div>



                            <div className='info-item'>
                                <h4><FaWordpressSimple /> Type Of University :</h4>
                                <h5>Public University</h5>
                            </div>
                        </div>

                        <div className='line-h'></div>


                        <div className='degree'>
                            <div className='info-item'>
                                <h4><FaWordpressSimple /> Degree's Offered :</h4>
                                <h5>Bachelor's, Diploma, Master's, Doctorate, Courses</h5>
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
                            <img className='main-image' src='/assets/images/Uni/10230-engineering.png' />
                            <div className='images-container'>
                                <div className='image-wrapper'><img src='/assets/images/Uni/10230-engineering.png' /></div>
                                <div className='image-wrapper'><img src='/assets/images/Uni/10230-engineering.png' /></div>
                                <div className='image-wrapper'><img src='/assets/images/Uni/10230-engineering.png' /></div>
                                <div className='image-wrapper'><img src='/assets/images/Uni/10230-engineering.png' /></div>
                                <div className='image-wrapper'><img src='/assets/images/Uni/10230-engineering.png' /></div>
                            </div>

                        </div>

                        <div className='line-h'></div>

                        <h3>Contact Information</h3>

                        <div className='contact-info'>
                            <div className='contact-info-item'>
                                <h4><FaPhone /> 61 923 9234</h4>
                            </div>
                            <div className='contact-info-item'>
                                <h4><FaWeibo /> www.univ.example.com</h4>
                            </div>
                            <div className='contact-info-item'>
                                <div className='social-media'>
                                    <FaFacebook />
                                    <FaLinkedin />
                                    <FaTwitter />
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

                        <h2>UNSW Rankings Summary</h2>

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
                            <div className='rank'>
                                <div className='content'>
                                    <h5>the top 100 <br /> universities globally</h5>
                                    <h3>43rd</h3>
                                    <h5>the university ranked</h5>
                                </div>
                                <img src='/assets/images/Uni/Rank1.png' />
                            </div>
                            <div className='rank'>
                                <div className='content'>
                                    <h5>the top 100 <br /> universities globally</h5>
                                    <h3>43rd</h3>
                                    <h5>the university ranked</h5>
                                </div>
                                <img src='/assets/images/Uni/Rank1.png' />
                            </div>
                        </div>
                        <div className='line'></div>

                    </div>
                </div>

            </section>


            <section className='description-uni'>

                <div className='description-uni-container'>
                    <h3 className="title-main"><span className="line-l"></span> Description <span className="line-r"></span></h3>

                    <h2>The University of New South Wales building.</h2>

                    <p>The main campus of the University of New South Wales is situated on a 38-hectare site in Kensington, just seven kilometers from Sydney. It features a wide range of facilities and buildings, including the Student Club, Health Center, University Bank, ATMs, parking lots, bus stops, and a bike center. The campus also offers on-campus housing, a library, the UNSW Bookstore, and various research centers. Additionally, it houses theaters, galleries, museums, an alumni foundation, a counseling services center, a prospective students' office, a language institute, and a postal center. Sports facilities, such as squash courts and swimming pools, are also available, along with the UNSW Center for International Students.</p>


                </div>

            </section>


            <section className='degrees-offered'>

                <div className='degrees-offered-container'>
                    <div className='left'>
                        <h3 className="title-main"><span className="line-l"></span> Degrees Offered <span className="line-r"></span></h3>

                        <h2>Degrees Offered by the University of New South Wales</h2>

                        <p>The University of New South Wales always supports empowering students to discover opportunities that will shape their future through world-class academic programs offered by the university, which include the following :</p>
                    </div>

                    <div className='right'>
                        <div className='cards-cont'>
                            <div className='card'>
                                <img src='/assets/images/Uni/Rank1.png' />
                                <h3>Bachelor's Degree</h3>
                            </div>
                            <div className='card'>
                                <img src='/assets/images/Uni/Rank1.png' />
                                <h3>Bachelor's Degree</h3>
                            </div>
                            <div className='card'>
                                <img src='/assets/images/Uni/Rank1.png' />
                                <h3>Bachelor's Degree</h3>
                            </div>
                            <div className='card'>
                                <img src='/assets/images/Uni/Rank1.png' />
                                <h3>Bachelor's Degree</h3>
                            </div>
                            <div className='card'>
                                <img src='/assets/images/Uni/Rank1.png' />
                                <h3>Bachelor's Degree</h3>
                            </div>
                            <div className='card'>
                                <img src='/assets/images/Uni/Rank1.png' />
                                <h3>Bachelor's Degree</h3>
                            </div>
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
                            <h2>Admission Requirements at the University of New South Wales</h2>

                            <p>Admission requirements for each program at the University of New South Wales vary depending on the field of study. However, here are the main requirements that prospective students must meet :</p>
                        </div>

                        <div className='right'>
                            <div className='card'>
                                <img src='/assets/images/Uni/Rank1.png' />
                                <h4>For the TOEFL iBT exam, a minimum score of 90 is required, with at least 22 in Writing, 22 in Reading, 22 in Listening, and 22 in Speaking. </h4>
                            </div>
                        </div>
                    </div>

                    <div className='bottom-cont'>
                        <div className='card'>
                            <img src='/assets/images/Uni/Rank1.png' />
                            <h4>For the IELTS exam, a minimum score of 6.5 is required, with at least 6.0 in each of the four sections (Listening, Reading, Writing, and Speaking).</h4>
                        </div>
                        <div className='card'>
                            <img src='/assets/images/Uni/Rank1.png' />
                            <h4>For the IELTS exam, a minimum score of 6.5 is required, with at least 6.0 in each of the four sections (Listening, Reading, Writing, and Speaking).</h4>
                        </div>
                        <div className='card'>
                            <img src='/assets/images/Uni/Rank1.png' />
                            <h4>For the IELTS exam, a minimum score of 6.5 is required, with at least 6.0 in each of the four sections (Listening, Reading, Writing, and Speaking).</h4>
                        </div>
                        <div className='card'>
                            <img src='/assets/images/Uni/Rank1.png' />
                            <h4>For the IELTS exam, a minimum score of 6.5 is required, with at least 6.0 in each of the four sections (Listening, Reading, Writing, and Speaking).</h4>
                        </div>
                        <div className='card'>
                            <img src='/assets/images/Uni/Rank1.png' />
                            <h4>For the IELTS exam, a minimum score of 6.5 is required, with at least 6.0 in each of the four sections (Listening, Reading, Writing, and Speaking).</h4>
                        </div>
                        <div className='card'>
                            <img src='/assets/images/Uni/Rank1.png' />
                            <h4>For the IELTS exam, a minimum score of 6.5 is required, with at least 6.0 in each of the four sections (Listening, Reading, Writing, and Speaking).</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className='fees'>
                <h3 className="title-main"><span className="line-l"></span> Fees <span className="line-r"></span></h3>

                <div className='fees-container'>
                    <div className='left'>
                        <h2>Tuition Fees at the University of New South Wales</h2>

                        <p>Undoubtedly, studying abroad is a significant investment, but it requires thorough research and planning. Students must manage their finances and budget, which is why UNSW has developed a calculator that allows students to determine the tuition fees for the program they plan to pursue.
                            It is important to note that the cost of studying at the University of New South Wales largely depends on the program students intend to study, as well as the academic degree they pursue. However, in general, the estimated tuition fees at UNSW are approximately 1,000 AUD, which equals around 719 USD annually, in addition to other fees that students may need.
                            The Opportunity platform has provided estimated costs related to other expenses:</p>
                    </div>

                    <div className='right'>
                        <div className='cards-container'>
                            <div className='card'>
                                <h5>Application Fee:</h5>
                                <h3>125 AUD</h3>
                            </div>

                            <div className='card' >
                                <h5>Books (note that purchasing books is not mandatory):</h5>
                                <h3>1000 AUD</h3>
                            </div>

                            <div className='card' >
                                <h5>Living expenses:</h5>
                                <h3>200 AUD</h3>
                            </div>

                            <div className='card' >
                                <h5>Additional fees such as health insurance, course fees, equipment and tool usage, laboratory fees, and field trips.</h5>
                                <h3></h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className='why'>
                <h3 className="title-main"><span className="line-l"></span> Why [University Name] <span className="line-r"></span></h3>

                <div className='why-container'>
                    <div className='left'>
                        <h2>Why Choose the University of New South Wales: Benefits and Challenges for International Students</h2>

                        <p>You may be wondering: why study at the University of New South Wales? Here's a list of key reasons that encourage students to choose UNSW: The university has a strong global reputation for its high quality of teaching and research. It offers a culturally diverse environment along with a safe and comfortable study atmosphere. Of the 500 companies in Australia, 45% are owned by UNSW, meaning there are ample job opportunities for students after graduation. The campus serves as a hub for recreational facilities, sports amenities, and cultural centers, offering students plenty of things to do in their free time. The climate is moderate, neither too hot nor too cold. However, there are also challenges that international students may face, such as the fact that English is not the official language of Australia, which can make communication difficult. Students might also initially struggle to build relationships and make friends, but this can be overcome by greeting others and joining student clubs.
                            Additionally, students may encounter cultural differences that are quite distinct from their own.</p>
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

                        <h2>Scholarships Offered by the University of New South Wales</h2>

                        <p>The University of New South Wales provides a variety of scholarships for students.</p>

                        <button>Learn More</button>
                    </div>

                </div>
            </section>


            <section className='graduates'>

                <h3 className="title-main"><span className="line-l"></span> Top Graduates <span className="line-r"></span></h3>


                <div className='graduates-container'>

                    <h2>Notable Alumni of the University of New South Wales</h2>

                    <h4>When talking about a prestigious university like the University of New South Wales,
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

            </section>

            <section className="universities">
                <div className="universities-container">

                    <h2>World Universities Guide</h2>

                    <p>Explore top universities worldwide, including in the US, UK, and Arab countries, with details on admissions, programs, fees, and scholarships.</p>

                    <div className="universities-cards">
                        <div className="universities-card">
                            <img src="/assets/images/HeroBack.svg" />

                            <div className="rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <h4><FaLocationArrow /> Washington</h4>

                            <h3>Korea University</h3>

                            <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


                            <button>Learn More <MdArrowOutward /> </button>
                        </div>
                        <div className="universities-card">
                            <img src="/assets/images/HeroBack.svg" />

                            <div className="rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <h4><FaLocationArrow /> Washington</h4>

                            <h3>Korea University</h3>

                            <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


                            <button>Learn More <MdArrowOutward /> </button>
                        </div>
                        <div className="universities-card">
                            <img src="/assets/images/HeroBack.svg" />

                            <div className="rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <h4><FaLocationArrow /> Washington</h4>

                            <h3>Korea University</h3>

                            <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


                            <button>Learn More <MdArrowOutward /> </button>
                        </div>
                        <div className="universities-card">
                            <img src="/assets/images/HeroBack.svg" />

                            <div className="rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <h4><FaLocationArrow /> Washington</h4>

                            <h3>Korea University</h3>

                            <p>The United States is home to some of the world's top universities, such as Harvard and Stanford. It offers diverse study programs and extensive research opportunities.</p>


                            <button>Learn More <MdArrowOutward /> </button>
                        </div>

                    </div>

                    <button className="explore">Explore The Countries</button>

                </div>
            </section>
            <Footer />

        </>
    )
}

export default page