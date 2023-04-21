import React, { useEffect, useRef } from 'react'
import Image from 'next/image';

import styles from "./hero.module.css";
import { useSnapshot } from 'valtio';
import state from '@/store';
import useWindowSize from '../hooks/useWindowSize';

import { BsFillPlayFill } from "react-icons/bs";

//#region gsap
import { Circ, Expo, Power2, gsap } from 'gsap';

const SlideItem = ({ bgCover, cover, title, description, isActive, isNext, isPrev }) => {

    const snap = useSnapshot(state);
    const { screenWidth } = useWindowSize();

    const styleHeight = screenWidth >= snap.breakPoints.md ? { height: `50svh` } : null


    const coverElement = useRef(null);
    const titleElement = useRef(null);
    const descriptionElement = useRef(null);
    const buttonElement = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        if (isNext || isPrev) {
            gsap.to(coverElement.current, { opacity: 0, scale: .8 });
            gsap.to(titleElement.current, { y: -80 });
            gsap.to(descriptionElement.current, { autoAlpha: 0, x: "-60%" });
            gsap.to(buttonElement.current, { autoAlpha: 0, scale: .5 });
        }
        if (isActive) {
            tl.to(coverElement.current,
                {
                    opacity: 1,
                    scale: 1,
                    duration: .6,
                    delay: .3,
                    ease: Circ.easeOut
                }
            )
            tl.to(titleElement.current,
                { y: 0, duration: .6 }
            )
            tl.to(descriptionElement.current, {
                autoAlpha: 1,
                x: 0,
                duration: .8
            });

            tl.to(buttonElement.current, {
                autoAlpha: 1,
                scale: 1,
                duration: .7,
                ease: Expo.easeInOut
            })
        }
    }, [isActive, isNext, isPrev])

    return (
        <div className='hero-slide-item relative'>
            <div className="bg-cover w-full max-md:min-h-[800px] max-md:h-screen" style={styleHeight}>
                <Image
                    src={bgCover}
                    width={720}
                    height={480}
                    className='md:w-full max-md:h-full object-cover'
                    alt={title}
                />
            </div>

            <div className={`${styles.content_wrapper} top-0 left-0 absolute w-full h-full`}>

                <div className="container mx-auto relative z-10 h-full">

                    <div className="flex h-full max-md:justify-center md:flex-row flex-col gap-x-2 lg:gap-20 gap-y-8">


                        <div className="cover-wrapper">
                            <div ref={coverElement} className="cover max-md:max-h-[500px] md:w-max md:h-full rounded-md overflow-hidden shadow-2xl shadow-black">
                                <Image
                                    src={cover}
                                    width={600}
                                    height={400}
                                    className='h-full w-full md:w-auto object-cover'
                                    alt={title}
                                />
                            </div>

                        </div>

                        <div className={`content md:w-auto overflow-x-hidden ${styles.content} md:max-w-3xl`}>
                            <h1 className={`${styles.content_title} inline-block overflow-hidden`}>
                                <span ref={titleElement} className='inline-block'>
                                    {title}
                                </span>
                            </h1>
                            <p ref={descriptionElement} className='max-lg:line-clamp-3 font-medium text-sm'>
                                {description}
                            </p>

                            <div className="buttons-wrapper mt-auto">
                                <button ref={buttonElement} className='button-v2 '>
                                    <BsFillPlayFill />
                                    <span>
                                        Şimdi izle
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SlideItem