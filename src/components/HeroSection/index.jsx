import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSnapshot } from 'valtio';
import state from '@/store';
import SlideItem from './SlideItem';
import { Autoplay } from 'swiper';

const HeroSection = () => {


    const snap = useSnapshot(state);

    return (
        <section className=''>
            <div>

                <Swiper
                    slidesPerView={1}
                    speed={1300}
                    autoplay={{
                        delay: 6500,
                    }}
                    modules={[Autoplay]}

                >
                    {
                        [..."123"].map((data, index) => (
                            <SwiperSlide
                                key={index}
                            >
                                {({ isActive, isPrev, isNext }) => (

                                    <SlideItem
                                        isPrev={isPrev}
                                        isNext={isNext}
                                        isActive={isActive}
                                        title={`John Wick ${index}`}
                                        bgCover={"/images/movie-images/john-wick4.jpg"}
                                        cover={"/images/movie-images/john-wick4-cover.jpg"}
                                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis natus autem reprehenderit aliquam voluptatibus rem amet placeat. Quis, cupiditate! Odio laudantium porro sapiente consectetur necessitatibus adipisci quia ab qui!"}
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