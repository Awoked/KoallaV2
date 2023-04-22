import Router from 'next/router';
import React, { useEffect, useState } from 'react'

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleStart = () => {
            setIsLoading(true);
        };

        const handleComplete = () => {
            setTimeout(() => setIsLoading(false), 150);
        };

        Router.events.on('routeChangeStart', handleStart);
        Router.events.on('routeChangeComplete', handleComplete);
        Router.events.on('routeChangeError', handleComplete);
        window.addEventListener('load', handleComplete);

        return () => {
            Router.events.off('routeChangeStart', handleStart);
            Router.events.off('routeChangeComplete', handleComplete);
            Router.events.off('routeChangeError', handleComplete);
            window.removeEventListener('load', handleComplete);

        };
    }, []);



    return isLoading
    
}

export default useLoading