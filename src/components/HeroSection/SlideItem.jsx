import React from 'react'
import Image from 'next/image';

import styles from "./hero.module.css";

const SlideItem = () => {
    return (
        <div className='hero-slide-item relative'>
            <div className="cover w-full max-md:h-screen">
                <Image
                    src={"/images/movie-images/john-wick4.jpg"}
                    width={1280}
                    height={720}
                    className='md:w-full max-md:h-full object-cover'
                    alt='John Wick 4'
                />
            </div>

            <div className={`${styles.content_wrapper} top-0 left-0 absolute w-full h-full`}>

                <div className="container mx-auto relative z-10 h-full">

                    <div className="flex h-full md:flex-row flex-col gap-20 gap-y-8">

                        <div className="cover md:w-4/12 rounded-md overflow-hidden shadow-2xl shadow-black">
                            <Image
                                src={"/images/movie-images/john-wick4-cover.jpg"}
                                width={600}
                                height={400}
                                className='h-full w-full md:w-auto object-cover'
                                alt='John Wick 4'
                            />
                        </div>

                        <div className={`content md:w-8/12 ${styles.content} `}>
                            <h1 className={`${styles.content_title}`}>
                                John Wick 4
                            </h1>
                            <p className='max-lg:line-clamp-3'>
                                Köpeğinin öldürülmesi üzerine yeniden yeraltı dünyasına karışan eski bir suikastçi olan John Wick'in (Keanu Reeves) yüksek tansiyonlu maceraları hız kesmeden devam ediyor. Suikastçinin tekrardan peşine takılan katillerle mücadelesini izleyeceğimiz devam filminde, mutlu bir son beklemenin büyük bir hata olacağı söylentiler arasında.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SlideItem