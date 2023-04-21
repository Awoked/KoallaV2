import React from 'react'

import styles from "./index.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from 'react-tippy';

const MovieCard = () => {
    return (
        <Link href={"/"} className={styles.card}>
            <div className="cover">
                <Image
                    src={"/images/movie-images/john-wick4-cover.webp"}
                    width={300}
                    height={450}
                    className='w-full object-cover'
                    alt='john wick'
                />
            </div>
            <div className={`${styles.card_content} group before:duration-500 before:transition-opacity before:opacity-0 hover:before:opacity-100`}>
                <Tooltip
                    title='John Wick 4'
                >
                    <div className='w-full py-2.5 px-3 max-md:bg-black bg-opacity-60'>
                        <h3
                            className='transition-all duration-500 md:translate-y-full md:opacity-0 md:pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto'
                        >
                            John Wick 4
                        </h3>
                    </div>
                </Tooltip>
                <p className='py-2.5 px-3 transition-all duration-700 -translate-x-full opacity-0 group-hover:-translate-x-0 group-hover:opacity-100'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, qui aspernatur sint omnis numquam quia accusamus error recusandae facilis deleniti.
                </p>
            </div>
        </Link>
    )
}

export default MovieCard