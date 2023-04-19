import SideBar from '@/components/Layout/SideBar'
import React from 'react'
import 'react-tippy/dist/tippy.css'


import { Comfortaa } from 'next/font/google'
const comfortaa = Comfortaa({ subsets: ['latin'] })

const Layout = ({ children }) => {
    return (

        <>
            <div className={`flex flex-col-reverse md:flex-row ${comfortaa.className}`}>
                <SideBar />
                <main className='min-h-[5000px] w-full'>
                    {children}
                </main>
            </div>

        </>
    )
}

export default Layout