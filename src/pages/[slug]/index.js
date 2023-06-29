import MoviePlayer from '@/components/MoviePlayer';
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
            <MoviePlayer
                movieURL={movieData?.movieURL}
            />
        </>
    )
}

export default MoviePage;
