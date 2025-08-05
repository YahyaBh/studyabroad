import React from 'react'
import './univcard.scss'
import { FaLocationArrow, FaStar } from 'react-icons/fa'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import { urlFor } from '@/app/lib/sanityClient'

const CardUni = ({ university, index }) => {

    return (
        <div className="universities-card" key={index + university.name}>
            <div className='top'>

                <img src={urlFor(university.images[0]).url()} alt={university.name} />


                <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <h4><FaLocationArrow /> {university.country}</h4>

                <h3>{university.name}</h3>

                <p>{university.overview.length > 140 ? university.overview.slice(0, 140) + '...' : university.overview}</p>

            </div>

            <Link href={`/university/${university.slug.current}`}>Learn More <MdArrowOutward /> </Link>
        </div>

    )
}

export default CardUni