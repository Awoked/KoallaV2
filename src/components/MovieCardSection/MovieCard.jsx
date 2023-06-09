import React, { useEffect, useRef, useState } from 'react'

import styles from "./index.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from 'react-tippy';

import { FaImdb } from "react-icons/fa";
import Button from '../Buttons/Button';
import { IoMdClose } from "react-icons/io";
import { gsap } from 'gsap';
import { BsFillPlayFill } from 'react-icons/bs';

const MovieCard = ({ slug, movieName, movieImage, movieDetails, imdb, movieId, genre }) => {

    const [toggleDetails, setToggleDetails] = useState(false);

    const details = useRef(null);
    const detailsInner = useRef(null);

    useEffect(() => {
        if (details.current) {

            gsap.from(details.current, {
                opacity: 0,
                duration: .4
            })
        }

    }, [toggleDetails])

    const closeWithAnimation = () => {
        if (details.current) {
            gsap.to(details.current, {
                opacity: 0,
                duration: 0.5
            })
            gsap.to(detailsInner.current, {
                opacity: 0,
                scale: .8,
                duration: 0.5,
                onComplete: () => {
                    setToggleDetails(false)
                }
            })
        }
    }


    useEffect(() => {
        function handleKeyPress(e) {
            if (e.key === "Escape") {
                closeWithAnimation();
            }
        }
        console.log(slug)
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <>
            <Tooltip
                title={movieName}
                position='bottom'
            >
                <div
                    onClick={() => setToggleDetails(true)}
                    className={`${styles.card} h-full`}
                >
                    <div className="cover h-full">
                        <img
                            src={movieImage ? movieImage : "/images/koalla-movie-cover.png"}
                            width={300}
                            height={450}
                            className='w-full h-full object-cover'
                            alt={movieName}
                        />
                    </div>
                    <div className={`${styles.card_content} w-full group before:w-full before:duration-500 before:transition-opacity before:opacity-0 hover:before:opacity-100`}>

                        <div className='w-full py-2.5 px-3 bg-gradient-to-t from-black to-transparent bg-opacity-60'>
                            <h3
                                className='transition-all duration-500 md:translate-y-full md:opacity-0 md:pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto'
                            >
                                {movieName}
                            </h3>
                        </div>
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

            </Tooltip>
            {
                toggleDetails &&
                <div ref={details} className='fixed grid place-items-center left-0 top-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-30 overflow-y-auto'>
                    <div ref={detailsInner} className='w-11/12 h-5/6 max-md:mb-14 md:w-2/3 md:h-[600px] z-20 bg-[#262428] bg-opacity-80 backdrop-blur-sm overflow-hidden shadow-md shadow-black rounded-lg relative'>
                        <div className='absolute right-3 top-3 z-10'>
                            <Button
                                onClick={closeWithAnimation}
                                className="!rounded-full p-1.5 group  shadow shadow-black"
                            >
                                <IoMdClose size={22} />
                            </Button>
                        </div>

                        <div className={`h-full relative flex flex-col`}>
                            <div className="relative h-1/3 cover w-full before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-gradient-to-t before:from-[#262428] before:to-transparent">
                                <img
                                    src={movieImage ? movieImage : "/images/koalla-movie-cover.png"}
                                    width={400}
                                    height={200}
                                    className='h-full w-full object-cover object-center'
                                    alt={movieName}
                                />
                            </div>
                            <div className='bg-[#262428] bg-opacity-80 h-2/3 relative z-10 p-4 py-6'>
                                <div className="content flex flex-col gap-y-4 h-full w-full">
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
                                    <div className="content-body-wrapper h-full grid">
                                        <div className="content-body flex flex-col gap-y-6 justify-between h-full">
                                            <div className='h-full relative overflow-y-auto'>
                                                <p className={`text-sm xl:text-base absolute opacity-80 pb-6 md:pb-8`}>
                                                    {
                                                        movieDetails
                                                    }
                                                </p>


                                            </div>
                                            <Link
                                                // as={`/${slug}`}
                                                href={`/${slug}?id=${movieId}`}
                                            >
                                                <Button
                                                    className="border-white !rounded-full px-4"
                                                    variant="outline"
                                                >
                                                    <BsFillPlayFill />
                                                    İzle
                                                </Button>
                                            </Link>
                                        </div>
                                        {/* <div>

                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={closeWithAnimation}
                        className='absolute w-full z-10 h-full'
                    >
                    </div>
                </div>
            }
        </>
    )
}

export default MovieCard