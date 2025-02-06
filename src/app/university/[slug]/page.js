import Navbar from '@/app/comps/navbar/navbar';
import Footer from '@/app/comps/footer/footer';
import { MdOutlineUpload } from 'react-icons/md';

import './page.scss'
import { FaFacebook, FaLinkedin, FaPhone, FaWeibo, FaWordpressSimple } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const page = ({ params }) => {

    async function slug() {
        const slug = params.slug;
        return slug;
    }

    return (
        <>

            <Navbar />


            <header>

                <div className='header-container'>

                    <div className='left'>
                        <h2>{slug()} <MdOutlineUpload /></h2>


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
                            <h4>2. Learning Quality</h4>
                            <h4>3. Learning Quality</h4>
                            <h4>4. Learning Quality</h4>
                            <h4>5. Learning Quality</h4>
                        </div>
                    </div>

                    <div className='right'>

                    </div>
                </div>

            </section>


            <Footer />

        </>
    )
}

export default page