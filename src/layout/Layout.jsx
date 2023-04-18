import SideBar from '@/components/Layout/SideBar'
import React from 'react'

const Layout = ({ children }) => {
    return (

        <>
            <SideBar />
            {children}

        </>
    )
}

export default Layout