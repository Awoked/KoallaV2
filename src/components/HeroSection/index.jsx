import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSnapshot } from 'valtio';
import state from '@/store';
import SlideItem from './SlideItem';
import { Autoplay } from 'swiper';

const HeroSection = () => {


    const snap = useSnapshot(state);

    const sliderData = [
        {
            title: "John Wick",
            bgCover: "/images/movie-images/john-wick4.jpg",
            cover: "/images/movie-images/john-wick4-cover.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis natus autem reprehenderit aliquam voluptatibus rem amet placeat. Quis, cupiditate! Odio laudantium porro sapiente consectetur necessitatibus adipisci quia ab qui!"
        },
        {
            title: "Ready Player One",
            bgCover: "/images/movie-images/ready-player-one.jpg",
            cover: "/images/movie-images/ready-player-one-cover.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis natus autem reprehenderit aliquam voluptatibus rem amet placeat. Quis, cupiditate! Odio laudantium porro sapiente consectetur necessitatibus adipisci quia ab qui!"
        },
        {
            title: "John Wick",
            bgCover: "/images/movie-images/john-wick4.jpg",
            cover: "/images/movie-images/john-wick4-cover.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis natus autem reprehenderit aliquam voluptatibus rem amet placeat. Quis, cupiditate! Odio laudantium porro sapiente consectetur necessitatibus adipisci quia ab qui!"
        },
    ]

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
                                        bgCover={data.bgCover}
                                        cover={data.cover}
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