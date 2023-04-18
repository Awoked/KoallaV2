import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
    return (
        <aside>
            <div className="aside-inner">
                <div className="logo">
                    <Link href={"/"}>
                        <Image src={"/images/logo.png"} width={200} height={150} />
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default SideBar