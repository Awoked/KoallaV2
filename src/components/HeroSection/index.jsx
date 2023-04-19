import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSnapshot } from 'valtio';
import state from '@/store';
import SlideItem from './SlideItem';

const HeroSection = () => {


    const snap = useSnapshot(state);

    return (
        <section className=''>
            <div className=''>

                <Swiper
                    slidesPerView={1}
                >
                    {
                        [..."123"].map((data, index) => (
                            <SwiperSlide
                                key={index}
                            >
                                <SlideItem />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </section>
    )
}

export default HeroSection