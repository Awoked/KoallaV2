import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

import NavLink from './NavLink';
import { Tooltip } from 'react-tippy';
import useWindowSize from '../hooks/useWindowSize';
import { useSnapshot } from 'valtio';
import state from "../../store";
import Logo from './Logo';

const SideBar = () => {

    const { screenWidth } = useWindowSize();

    const snap = useSnapshot(state)



    return (
        <aside className={`sticky max-md:w-[90%] max-md:mx-auto max-md:rounded-xl max-md:bottom-2 md:top-0 h-[60px] md:h-[100svh] transition-all duration-500  ${snap.asideActive ? "md:max-w-[180px]" : "md:max-w-[90px]"}  bg-[#262428]`}>
            <div className="aside-inner w-full h-full flex flex-row md:flex-col items-center p-3">
                <div className="aside-toggle md:pb-4 max-md:hidden">
                    <ul>
                        <li className="nav-item">
                            <Tooltip
                                title='Menü'
                                position='right'
                                trigger='mouseenter'
                            >
                                <button onClick={() => state.asideActive = !snap.asideActive} className="nav-link">
                                    <FiMenu />
                                </button>
                            </Tooltip>
                        </li>
                    </ul>
                </div>
                {
                    screenWidth >= snap.breakPoints.md &&
                    <Logo />
                }
                <nav className='md:py-6 h-full flex md:flex-col flex-row max-md:justify-center gap-x-4 w-full'>
                    <ul className='flex flex-col items-center justify-center md:gap-4'>
                        <li className='nav-item'>
                            <Tooltip
                                disabled={snap.asideActive}
                                title={"Anasayfa"}
                                position={screenWidth > snap.breakPoints.md ? "right" : "top"}
                                trigger="mouseenter"
                            >
                                <NavLink href="/" linkName={"Anasayfa"} >
                                    <AiOutlineHome />
                                </NavLink>
                            </Tooltip>
                        </li>
                    </ul>

                    {
                        screenWidth <= snap.breakPoints.md &&
                        <Logo />
                    }

                    <ul className='flex flex-col items-center justify-center'>
                        <li className="nav-item">
                            <Tooltip
                                disabled={snap.asideActive}
                                title={"Kayıt Ol"}
                                position={screenWidth > snap.breakPoints.md ? "right" : "top"}
                                trigger="mouseenter"
                            >
                                <NavLink href={"/"} linkName={"Kayıt Ol"}  >
                                    <AiOutlineUser />
                                </NavLink>
                            </Tooltip>
                        </li>
                    </ul>
                </nav>


            </div>
        </aside >
    )
}

export default SideBar