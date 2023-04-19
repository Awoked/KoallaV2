import state from '@/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSnapshot } from 'valtio'
import useWindowSize from '../hooks/useWindowSize'

const Logo = () => {

    const snap = useSnapshot(state)

    const {screenWidth} = useWindowSize();

    return (
        <div className="logo max-md:h-full">
            <Link href={"/"}>
                <Image
                    src={snap.asideActive && snap.breakPoints.md <= screenWidth ? "/images/logo.png" : "/images/koalla.png"}
                    width={200}
                    height={60}
                    className='md:w-full w-auto h-full'
                    alt='Koalla'
                />
            </Link>
        </div>

    )
}

export default Logo