import React, { useState } from 'react'
import useLoading from 'next-loader/useLoading'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Image from 'next/image';


const PageLoader = ({ delay }) => {
    const isLoading = useLoading({ delay: delay });

    const [skeleton, setSkeleton] = useState(true);

    return (
        <div className={`fixed grid place-items-center z-[999] right-0 top-0 p-3 w-full h-full bg-[#262428] ${isLoading ? "" : "transition-all duration-1000 opacity-0 invisible pointer-events-none"}`}>
            <div className={`flex flex-col items-center gap-y-4`}>
                <Image
                    src={"/images/logo.png"}
                    width={372}
                    height={161}
                    className={`w-full h-full object-cover ${skeleton ? "opacity-0" : "opacity-100"}`}
                    alt='Logo'
                    onLoadingComplete={() => setSkeleton(false)}
                />
                <div className='flex items-center gap-2 text-2xl animate-pulse font-bold'>
                    {isLoading ?

                        <>
                            <span>Loading</span>
                            < AiOutlineLoading3Quarters size={24} className='animate-spin' />
                        </>
                        :
                        <span>
                            Loaded
                        </span>
                    }

                </div>
            </div>
        </div>
    )
}

export default PageLoader
