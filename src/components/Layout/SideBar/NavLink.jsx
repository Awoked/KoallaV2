import Link from 'next/link'
import React from 'react'
import { useSnapshot } from 'valtio'

import store from "@/store"
import useWindowSize from '../../hooks/useWindowSize'

const NavLink = ({ href, children, linkName, ...props }) => {

    const snap = useSnapshot(store);

    const { screenWidth } = useWindowSize();

    return (
        <>
            {
                props.as !== "button" ?
                    <Link href={href} onClick={props.onClick} className={`nav-link flex items-center justify-center gap-1.5 ${props.className}`}>
                        {
                            children
                        }
                        {
                            snap.asideActive &&
                            screenWidth >= snap.breakPoints.md &&
                            <span>
                                {linkName}
                            </span>
                        }
                    </Link>
                    :
                    <button onClick={props.onClick} className={`nav-link flex items-center justify-center gap-1.5 ${props.className}`}>
                        {
                            children
                        }
                        {
                            snap.asideActive &&
                            screenWidth >= snap.breakPoints.md &&
                            <span>
                                {linkName}
                            </span>
                        }
                    </button>
            }
        </>
    )
}

export default NavLink