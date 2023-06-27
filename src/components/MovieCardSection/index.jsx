import React, { useState, useEffect } from 'react'
import SectionTitle from '../SectionTitle'

import styles from "./index.module.css";
import MovieCard from './MovieCard';


const MovieCardSection = () => {

    const movieData = [..."123456789"];

    const [testData, setTestData] = useState([]);

    useEffect(() => {
        fetch("/api/movies")
            .then(res => res.json())
            .then(data => {
                setTestData(data);
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
                            movieData.map((data, index) => (

                                <MovieCard
                                    key={index}
                                    movieId={1}
                                    movieName={"Ready Player One"}
                                    movieImage={"/images/movie-images/ready-player-one-cover.webp"}
                                    imdb={9.5}
                                    movieDetails={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae saepe accusamus fuga dignissimos ab recusandae quasi natus consectetur vero ex earum nemo minima sapiente ad, similique vitae facere autem placeat iste fugiat? Explicabo veniam debitis minima assumenda eaque tempore quia."}
                                />
                            ))
                        }

                    </div>
                </div>
                {
                    testData &&
                    testData.map((data, index) => (
                        <h1>{data.title}</h1>
                    ))
                }
            </section>
        </>
    )
}

export default MovieCardSection