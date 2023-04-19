import SideBar from '@/components/Layout/SideBar'
import React from 'react'
import 'react-tippy/dist/tippy.css'


import { Comfortaa } from 'next/font/google'
import Search from '@/components/Layout/Search'
const comfortaa = Comfortaa({ subsets: ['latin'] })

const Layout = ({ children }) => {
    return (

        <>
            <div className={`flex flex-col-reverse md:flex-row ${comfortaa.className}`}>
                <SideBar />
                <main className='min-h-[5000px] w-full relative'>
                    <Search />
                    {children}
                </main>
            </div>

        </>
    )
}

export default Layout