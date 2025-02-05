import Navbar from '@/app/comps/navbar/navbar';
import '../page.scss'
import Footer from '@/app/comps/footer/footer';
import { MdOutlineUpload } from 'react-icons/md';

const page = ({ params }) => {

    const slug = params.slug;

    return (
        <>

            <Navbar />


            <header>

                <div className='header-container'>

                    <div className='left'>
                        <h2>{slug} <MdOutlineUpload/></h2>
                    </div>

                    <div className='right'>
                        
                    </div>

                </div>


            </header>


            <Footer />

        </>
    )
}

export default page