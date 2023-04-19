import state from '@/store';
import { Bounce, Elastic, Expo, Power4, gsap } from 'gsap'
import Image from 'next/image';
import React, { useEffect } from 'react'

const FirstLoad = () => {

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(".content .text-1 .content-text span",
            {
                opacity: 0
            },
            {
                opacity: 1,
                stagger: .1,
            }
        )

        tl.to(".content .text-1 .content-text span",
            {
                opacity: 0,
                y: -5,
                stagger: 0.1,
                ease: Bounce.easeIn
            }
        )

        tl.to(".content .text-1", { display: "none" });
        tl.from(".content .text-2", { display: "none" });

        tl.fromTo(".content .text-2 .content-text span",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                stagger: .1
            }
        )

        tl.to(".content .text-2 .content-text",
            {
                y: -50,
                opacity: 0,
                stagger: .3,
                duration: .2,
                delay: 1.5,
                ease: Expo.easeInOut
            }
        )
        tl.to(".content .text-2", { display: "none" })

        tl.fromTo(".brand-wrapper",
            {
                display: "none",
                opacity: 0,
                scale: .9,
            },
            {
                display: "flex",
                opacity: 1,
                scale: 1,
                duration: .3,
                ease: Power4.easeInOut,
                onComplete: () => {

                }
            },
        )

    }, [])

    const TextForAnimation = (text) => {
        return [...text].map((data, index) => (
            <span key={index}>
                {data}
            </span>
        ))
    }

    const CloseFirstLoad = () => {
        gsap.to(".first-load",
            {
                scale: 2,
                opacity: 0,
                duration: 1.3,
                pointerEvents: "none",
                ease: Expo.easeInOut,
            }
        )

        fetch("/api/firstload", {
            method: "POST"
        })
    }

    return (
        <div className='first-load fixed top-0 left-0 z-[999]'>
            <video
                src="/videos/Untitled.mp4"
                autoPlay
                muted
                loop
                className='w-screen h-screen object-cover'
            >
            </video>

            <div className="content fixed z-[1000] top-0 left-0 w-full h-full bg-black backdrop-blur-sm bg-opacity-80">
                <div className="inner  flex justify-center  items-center w-full h-full">
                    <div className="text-wrapper text-5xl xl:text-6xl font-bold leading-relaxed text-center">
                        <div className="text-1">
                            <h1 className='content-text'>
                                {
                                    TextForAnimation("Gördüklerinizin")
                                }
                            </h1>
                            <h1 className='content-text'>
                                {
                                    TextForAnimation("Çok")
                                }
                            </h1>
                            <h1 className='content-text'>
                                {
                                    TextForAnimation("Ötesinde.")
                                }
                            </h1>
                        </div>

                        <div className="text-2">

                            <h1 className='content-text'>
                                {
                                    TextForAnimation("Yeni Nesil")
                                }
                            </h1>
                            <h1 className='content-text'>
                                {
                                    TextForAnimation("Bir")
                                }
                            </h1>
                            <h1 className='content-text'>
                                {
                                    TextForAnimation("Film Deneyimi.")
                                }
                            </h1>

                        </div>

                        <div className="brand-wrapper flex flex-col justify-center items-center gap-4">
                            <Image
                                src={"/images/logo.png"}
                                width={260}
                                height={100}
                                alt='Koalla'
                            />

                            <button onClick={CloseFirstLoad} className='text-3xl font-medium hover:text-[#FC3C1E] transition-colors duration-300'>
                                Devam et
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstLoad