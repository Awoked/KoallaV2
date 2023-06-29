import React, { useState, useEffect } from 'react'
import SectionTitle from '../SectionTitle'

import styles from "./index.module.css";
import MovieCard from './MovieCard';


const MovieCardSection = () => {

    const movieData = [..."123456789"];
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/api/movies").then((res) => {
            if (res.status === 200) {
                return res.json();
            }
        }).then((data) => {
            console.log(data);
            setMovies(data);
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <>

            <section className='py-4'>
                <div className="container mx-auto">
                    <SectionTitle
                        title={"Filmler"}
                        position={"start"}
                    />

                    <div className={`${styles.movies_grid}`}>

                        {
                            movies.map((data, index) => (

                                <MovieCard
                                    key={index}
                                    movieId={data.id}
                                    movieName={data.title}
                                    movieImage={data.imageCover}
                                    imdb={data.imdb}
                                    movieDetails={data.description}
                                    slug={data.slug}
                                    movieData={data}
                                />
                            ))
                        }

                    </div>
                </div>

            </section>
        </>
    )
}

export default MovieCardSection