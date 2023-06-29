import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';

const MoviePlayer = ({ movieURL }) => {
    console.log(movieURL)
    return (
        <>

            <div
                className='fixed left-0 top-0 w-full h-full bg-[#262428] z-[100] '
            >
                <div className="relative w-full h-full grid place-items-center">
                    <div
                        className={`absolute left-0 top-0 py-3 px-4 z-10 w-full bg-gradient-to-b from-black to-transparent transition-all group opacity-100 hover:opacity-100`}
                    >
                        <Link
                            href={"/"}

                            className='transition-transform translate-x-20 group-hover:translate-x-0'
                        >
                            <BsArrowLeft size={32} />
                        </Link>


                    </div>

                    {
                        movieURL &&
                        <iframe src={movieURL} frameBorder="0" allowFullScreen width="100%" height="100%" className="w-full h-full object-cover"></iframe>

                    }
                </div>
            </div>

        </>
    )
}

export default MoviePlayer