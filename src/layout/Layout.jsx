import SideBar from '@/components/Layout/SideBar'
import React, { useEffect, useState } from 'react'
import 'react-tippy/dist/tippy.css'

import Search from '@/components/Layout/Search'
import { useSnapshot } from 'valtio'
import state from '@/store'
import useWindowSize from '@/components/hooks/useWindowSize'
import MoviePlayer from '@/components/MoviePlayer'
import { useRouter } from 'next/router'

import PageLoader from '@/components/PageLoader'


const Layout = ({ children }) => {

    const snap = useSnapshot(state);
    const { screenWidth } = useWindowSize();
    const router = useRouter();

    return (

        <>

            <div className={`flex flex-col-reverse md:flex-row`}>
                <SideBar />
                <main className='w-full min-h-screen relative' style={{ width: screenWidth >= snap.breakPoints.md ? `calc(100% - ${snap.asideWidth}px)` : "100%" }}>

                    <Search />

                    {children}
                </main>

            </div>
            {
                router.query?.id &&
                <MoviePlayer />
            }

            <PageLoader
                delay={150}
            />
        </>
    )
}

export default Layout