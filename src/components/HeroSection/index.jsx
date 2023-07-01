import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideItem from './SlideItem';
import { Autoplay } from 'swiper';
import { SUBRESOURCE_INTEGRITY_MANIFEST } from 'next/dist/shared/lib/constants';

const HeroSection = () => {




    const [sliderData, setSliderData] = useState([
        {
            title: "John Wick",
            bgCover: "/images/movie-images/john-wick4.webp",
            cover: "/images/movie-images/john-wick4-cover.webp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis natus autem reprehenderit aliquam voluptatibus rem amet placeat. Quis, cupiditate! Odio laudantium porro sapiente consectetur necessitatibus adipisci quia ab qui!"
        },
        {
            title: "Ready Player One",
            bgCover: "/images/movie-images/ready-player-one.webp",
            cover: "/images/movie-images/ready-player-one-cover.webp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis natus autem reprehenderit aliquam voluptatibus rem amet placeat. Quis, cupiditate! Odio laudantium porro sapiente consectetur necessitatibus adipisci quia ab qui!"
        },
        {
            title: "John Wick",
            bgCover: "/images/movie-images/john-wick4.webp",
            cover: "/images/movie-images/john-wick4-cover.webp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis natus autem reprehenderit aliquam voluptatibus rem amet placeat. Quis, cupiditate! Odio laudantium porro sapiente consectetur necessitatibus adipisci quia ab qui!"
        },
    ])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`/api/movies`);
                
                if (response.status !== 200) {
                    const error = new Error("Hata");
                    error.name = "server";
                    throw error;
                }
                const data = await response.json();
                setSliderData(data);
            } catch (error) {
            }
        }
        getData();
    }, [])

    return (
        <section className=''>
            <div>

                <Swiper
                    slidesPerView={1}
                    speed={1300}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                >
                    {
                        sliderData.map((data, index) => (
                            <SwiperSlide
                                key={index}
                            >
                                {({ isActive, isPrev, isNext }) => (

                                    <SlideItem
                                        isPrev={isPrev}
                                        isNext={isNext}
                                        isActive={isActive}
                                        title={data.title}
                                        bgCover={data.imageCover}
                                        cover={data.imageCover}
                                        description={data.description}
                                    />
                                )}
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </section>
    )
}

export default HeroSection