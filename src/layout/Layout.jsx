import SideBar from '@/components/Layout/SideBar'
import React, { useEffect } from 'react'
import 'react-tippy/dist/tippy.css'


import { Comfortaa } from 'next/font/google'
import Search from '@/components/Layout/Search'
import { useSnapshot } from 'valtio'
import state from '@/store'
import useWindowSize from '@/components/hooks/useWindowSize'
import FirstLoad from '@/components/FirstLoad'

const comfortaa = Comfortaa({ subsets: ['latin'] })

const Layout = ({ children }) => {

    const snap = useSnapshot(state);

    const { screenWidth } = useWindowSize();


    useEffect(() => {
        const firstLoadActive = JSON.parse(localStorage.getItem("firstLoadActive"));
        if (firstLoadActive !== null) {
            state.firstLoadActive = firstLoadActive
        }
    }, []);

    return (

        <>
            {
                snap.firstLoadActive &&
                <FirstLoad />
            }
            <div className={`flex flex-col-reverse md:flex-row ${comfortaa.className}`}>
                <SideBar />
                <main className='min-h-[5000px] w-full relative' style={{ width: screenWidth >= snap.breakPoints.md ? `calc(100% - ${snap.asideWidth}px)` : "100%" }}>
                    <Search />
                    {children}
                </main>
            </div>

        </>
    )
}

export default Layout