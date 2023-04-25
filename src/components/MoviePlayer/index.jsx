import slugify from '@/helpers/slugify';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';

const MoviePlayer = () => {

    const router = useRouter();

    const [movie, setMovie] = useState({
        url: "/videos/neon.mp4"
    });


    useEffect(() => {

        const id = router.query;
        setMovie({
            url: "/videos/neon.mp4"
        })
    }, [router])

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
                    <video
                        src={movie.url}
                        controls
                        className='w-full'
                    >

                    </video>

                </div>
            </div>

        </>
    )
}

export default MoviePlayer