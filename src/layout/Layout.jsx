import SideBar from '@/components/Layout/SideBar'
import React, { useEffect, useState } from 'react'
import 'react-tippy/dist/tippy.css'


import { Comfortaa } from 'next/font/google'
import Search from '@/components/Layout/Search'
import { useSnapshot } from 'valtio'
import state from '@/store'
import useWindowSize from '@/components/hooks/useWindowSize'
import MoviePlayer from '@/components/MoviePlayer'
import { useRouter } from 'next/router'
import useLoading from '@/components/hooks/useLoading'

const comfortaa = Comfortaa({ subsets: ['latin'] })

const Layout = ({ children }) => {

    const snap = useSnapshot(state);
    const { screenWidth } = useWindowSize();
    const router = useRouter();

    const isLoading  = useLoading();


    console.log(isLoading)

    return (

        <>
            <div className={`flex flex-col-reverse md:flex-row ${comfortaa.className}`}>
                <SideBar />
                <main className='min-h-[5000px] w-full relative' style={{ width: screenWidth >= snap.breakPoints.md ? `calc(100% - ${snap.asideWidth}px)` : "100%" }}>
                    <div className={`fixed z-[100] right-0 top-0 p-3 w-full h-full bg-black transition-all ${isLoading ? "" : "opacity-0 invisible"}`}>LOADİNG</div>
                    <Search />
                    {children}
                </main>

            </div>
            {/* <MoviePlayer /> */}

        </>
    )
}

export default Layout