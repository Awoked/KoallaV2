import React, { useEffect, useRef, useState } from 'react'

import styles from "./index.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from 'react-tippy';
import slugify from '@/helpers/slugify';

import { FaImdb } from "react-icons/fa";
import Button from '../Buttons/Button';
import { IoMdClose } from "react-icons/io";
import { gsap } from 'gsap';

const MovieCard = ({ movieName, movieImage, movieDetails, imdb, movieId }) => {

    const [toggleDetails, setToggleDetails] = useState(false);

    const details = useRef(null);

    useEffect(() => {
        if (details.current) {

            gsap.from(details.current, {
                opacity: 0,
                duration: .4
            })
        }
    }, [toggleDetails])


    return (
        <>

            <div
                onClick={() => setToggleDetails(true)}
                // href={{
                //     pathname: "/",
                //     query: { "id": movieId }
                // }}
                // as={`/${slugify(movieName)}`}
                className={styles.card}
            >
                <div className="cover">
                    <Image
                        src={movieImage}
                        width={300}
                        height={450}
                        className='w-full object-cover'
                        alt={movieName}
                    />
                </div>
                <div className={`${styles.card_content} w-full group before:w-full before:duration-500 before:transition-opacity before:opacity-0 hover:before:opacity-100`}>
                    <Tooltip
                        title={movieName}
                    >
                        <div className='w-full py-2.5 px-3 bg-gradient-to-t from-black to-transparent bg-opacity-60'>
                            <h3
                                className='transition-all duration-500 md:translate-y-full md:opacity-0 md:pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto'
                            >
                                {movieName}
                            </h3>


                        </div>
                    </Tooltip>
                    <div className='absolute top-0 flex justify-between p-1'>
                        <Tooltip title='IMDB Puanı'>
                            <span className='bg-black text-yellow-500 p-2 rounded-md flex items-center gap-1.5 font-medium text-base 2xl:text-lg'>
                                <FaImdb
                                    size={26}
                                />
                                {imdb}
                            </span>
                        </Tooltip>
                    </div>
                </div>
            </div>

            {
                toggleDetails &&
                <div ref={details} className='fixed grid place-items-center left-0 top-0 w-full h-full bg-black bg-opacity-30 z-30'>
                    <div className='w-2/3 h-2/3 z-20 bg-[#262428] bg-opacity-95 backdrop-blur-sm overflow-hidden shadow-md shadow-black rounded-lg relative'>
                        <div className='absolute right-3 top-3 z-10'>
                            <Button
                                onClick={() => setToggleDetails(false)}
                                className="!rounded-full p-1.5"
                                variant="outline"
                            >
                                <IoMdClose size={24} />
                            </Button>
                        </div>

                        <div className={`h-full relative flex flex-col`}>
                            <div className="relative h-1/3 cover w-full before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-gradient-to-t before:from-[#262428] before:to-transparent">
                                <Image
                                    src={movieImage}
                                    width={400}
                                    height={200}
                                    className='h-full w-full object-cover object-center'
                                    alt={movieName}
                                />
                            </div>
                            <div className='bg-[#262428] h-2/3 relative z-10 p-4 py-6'>
                                <div className="content flex flex-col gap-y-4 w-full">
                                    <div className="content-head flex justify-between items-baseline">
                                        <h1
                                            className='xl:text-4xl font-bold'
                                        >
                                            {movieName}
                                        </h1>
                                        <span className='bg-black text-yellow-500 p-2 rounded-md flex items-center gap-1.5 font-medium text-base 2xl:text-3xl'>
                                            <FaImdb
                                            />
                                            {imdb}
                                        </span>
                                    </div>
                                    <div className="content-body flex">
                                        <p className='text-sm xl:text-base opacity-80 w-4/6'>
                                            {movieDetails}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => setToggleDetails(false)}
                        className='absolute w-full z-10 h-full'
                    >
                    </div>
                </div>
            }
        </>
    )
}

export default MovieCard