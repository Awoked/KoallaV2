import React from 'react'
import SectionTitle from '../SectionTitle'

import styles from "./index.module.css";
import MovieCard from './MovieCard';

const MovieCardSection = () => {

    const movieData = [..."123456789"];

    return (
        <>

            <section>
                <div className="container mx-auto">
                    <SectionTitle
                        title={"Filmler"}
                        position={"start"}
                    />

                    <div className={`${styles.movies_grid}`}>

                        {
                            movieData.map((data, index) => (

                                <MovieCard
                                    key={index}
                                    movieId={1}
                                    movieName={"John Wick 4"}
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