import useWindowSize from '@/components/hooks/useWindowSize';
import state from '@/store';
import { Expo, gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { useSnapshot } from 'valtio';

const Search = () => {

    const snap = useSnapshot(state);

    useEffect(() => {

        gsap.to(".search-wrapper",
            {

                y: snap.isSearchActive ? 0 : -80,
                scale: snap.isSearchActive ? 1 : .9,
                opacity: snap.isSearchActive ? 1 : 0,
                duration: .3,
                transition: Expo.easeInOut
            }

        )


    }, [snap.isSearchActive])

    return (
        <>
            {
                <div className={`search-wrapper max-md:!left-0 max-md:!w-full left-0 z-20 fixed top-0`} style={{ width: `calc(100% - ${snap.asideWidth}px)`, left: `${snap.asideWidth}px` }}>
                    <div className="p-3 w-full">
                        <form>

                            <div className="search-inner">
                                <input
                                    type="text"
                                    className='w-full px-3 py-2.5 outline-none rounded-md border bg-transparent'
                                    placeholder='Aramak istediğiniz kelimeyi girin...'
                                />
                            </div>

                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default Search;