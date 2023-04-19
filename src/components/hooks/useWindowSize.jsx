import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setScreenWidth(window.innerWidth);
        }
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        screenWidth
    }
}

export default useWindowSize