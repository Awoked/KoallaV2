import slugify from '@/helpers/slugify';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const MoviePlayer = () => {

    const router = useRouter();

    const [movie, setMovie] = useState({
        url: "/videos/neon.mp4"
    });



    useEffect(() => {
    }, [router])

    return (
        <div className='fixed bottom-0 right-0 p-3 bg-red-300 z-30'>

            <Link
                href={{
                    pathname: "/",
                    query: { "movie-slug": "value2" }
                }}
                as={`/${slugify("Film Adı")}`}
            >
                değiştir
            </Link>
            <br />
            <pre>
                {

                }
                {
                    JSON.stringify(router.query, null, 2)
                }
            </pre>
        </div>
    )
}

export default MoviePlayer