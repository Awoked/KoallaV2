import MoviePlayer from '@/components/MoviePlayer';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const MoviePage = () => {
    const router = useRouter();
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        const { id } = router.query;


        if (id) {
            fetch(`/api/movies?id=${id}`)
                .then(res => {
                    return res.json();
                }).then(data => {
                    setMovieData(data);
                }).catch(error => {
                    console.log(error);
                })

        }
    }, [router])

    return (
        <>
        <Head>
            <title>{movieData.title}</title>
            <meta name="description" content={movieData.description} />
        </Head>
            <MoviePlayer
                movieURL={movieData?.movieURL}
            />
        </>
    )
}

export default MoviePage;
