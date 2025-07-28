import React from 'react'
import './style.scss'
import { FaLocationArrow, FaStar } from 'react-icons/fa'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import { urlFor } from '@/app/lib/sanityClient'

const CardUni = ({ university, index }) => {

    return (
        <div className="universities-card" key={index + university.name}>
            <div className='top'>
                {university.images && university.images.length > 0 ? (
                    university.images.map(img =>
                        img.asset ? (
                            <img
                                key={img._key}
                                src={urlFor(img).url()}
                                alt={`${university.name} image`}
                            />
                        ) : null
                    )
                ) : (
                    <img src="https://via.placeholder.com/300x200" />
                )}


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