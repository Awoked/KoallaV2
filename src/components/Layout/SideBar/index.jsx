import React, { useEffect, useRef, useState } from 'react'

import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md"
import { Tooltip } from 'react-tippy';

import useWindowSize from '../../hooks/useWindowSize';
import { useSnapshot } from 'valtio';
import state from "../../../store";

//#region Components
import NavLink from './NavLink';
import Logo from './Logo';
import Menu from './Menu';
import { signOut, useSession } from 'next-auth/react';
import Button from '../../Buttons/Button';
import LoggedUser from './LoggedUser';
import Image from 'next/image';



const SideBar = () => {

    const { screenWidth } = useWindowSize();

    const snap = useSnapshot(state);


    const [authMenuToggler, setAuthMenuToggler] = useState(false);


    const asideElement = useRef(null);

    const handleAsideWidth = () => {
        state.asideWidth = asideElement.current.getBoundingClientRect().width;
    }

    useEffect(() => {
        if (asideElement.current) {
            asideElement.current.addEventListener('transitionend', handleAsideWidth);
            handleAsideWidth();
            return () => {
                asideElement.current.removeEventListener('transitionend', handleAsideWidth);
            }
        }

    }, [snap.asideActive, screenWidth]);

    const { status, data } = useSession();

    return (
        <>
            <aside ref={asideElement} className={`sticky max-md:w-[90%] shadow-sm shadow-black z-50 max-md:mx-auto max-md:rounded-xl max-md:bottom-2 md:top-0 h-[60px] md:h-[100svh] transition-all duration-500  ${snap.asideActive ? "md:max-w-[180px]" : "md:max-w-[90px]"}  bg-[#262428]`}>
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
                    <nav className='md:py-6 h-full flex md:flex-col flex-row max-md:justify-center gap-x-4 gap-y-4 w-full relative'>
                        <ul className='flex flex-row md:flex-col items-center justify-end md:justify-center md:gap-4 max-md:w-5/12'>
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
                            <li className='nav-item'>
                                <Tooltip
                                    disabled={snap.asideActive}
                                    title={"Arama"}
                                    position={screenWidth > snap.breakPoints.md ? "right" : "top"}
                                    trigger="mouseenter"
                                >
                                    <NavLink as="button" onClick={() => state.isSearchActive = !snap.isSearchActive} linkName={"Arama"} >
                                        <AiOutlineSearch />
                                    </NavLink>
                                </Tooltip>
                            </li>
                        </ul>

                        {
                            screenWidth <= snap.breakPoints.md &&
                            <Logo />
                        }

                        <ul className='flex flex-row md:flex-col items-center justify-start md:justify-center max-md:w-5/12'>
                            <li className="nav-item">
                                <Tooltip
                                    disabled={snap.asideActive}
                                    title={status === "authenticated" ? data.user?.name : "Kayıt Ol"}
                                    position={screenWidth > snap.breakPoints.md ? "right" : "top"}
                                    trigger="mouseenter"
                                >
                                    <NavLink
                                        as="button"
                                        onClick={() => setAuthMenuToggler(!authMenuToggler)}
                                        linkName={status === "authenticated" ? data.user?.name : "Kayıt Ol"}
                                    >

                                        {
                                            status === "authenticated" ?
                                                data.user?.image ?
                                                    <Image
                                                        src={data.user?.image}
                                                        width={32}
                                                        height={32}
                                                        alt={data.user?.name}
                                                        className='max-w-[30px] rounded-full'
                                                    />
                                                    :
                                                    <AiOutlineUser color={data.user?.role === "admin" && "red"} />
                                                :
                                                <AiOutlineUser />
                                        }

                                    </NavLink>
                                </Tooltip>
                                <Menu
                                    setMenuActive={setAuthMenuToggler}
                                    isMenuActive={authMenuToggler}
                                >
                                    {
                                        status === "unauthenticated" ?
                                            <>
                                                <NavLink href={"/auth/login"} onClick={() => setAuthMenuToggler(false)}>
                                                    <span className='w-max text-sm 2xl:text-base'>Giriş Yap</span>
                                                </NavLink>
                                                <NavLink href={"/auth/register"} className="bg-[#FD3D23]" onClick={() => setAuthMenuToggler(false)}>
                                                    <span className='w-max text-sm 2xl:text-base'>Kayıt Ol</span>
                                                </NavLink>
                                            </>
                                            :
                                            <>
                                                <LoggedUser />
                                            </>
                                    }
                                </Menu>
                            </li>
                            {
                                status === "authenticated" &&
                                data.user?.role === "admin" &&
                                <li className="nav-item">
                                    <Tooltip
                                        disabled={snap.asideActive}
                                        title={"Admin Sayfası"}
                                        position={screenWidth > snap.breakPoints.md ? "right" : "top"}
                                        trigger="mouseenter"
                                    >
                                        <NavLink
                                            href={"/admin"}
                                            linkName={"Admin"}
                                        >
                                            <MdOutlineAdminPanelSettings />
                                        </NavLink>
                                    </Tooltip>
                                </li>
                            }
                        </ul>
                    </nav>


                </div>
            </aside>
            {
                authMenuToggler &&
                <div className={`absolute left-0 w-screen h-screen -top-0 z-[28]`} onClick={() => setAuthMenuToggler(false)}>

                </div>
            }
        </>
    )
}

export default SideBar