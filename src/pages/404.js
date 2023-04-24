import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const ErrorPage = () => {

    const router = useRouter();

    useEffect(() => {
        router.push("/", router.asPath)
    }, [])

    return (

        <Head>
            <title>Koalla</title>
        </Head>
    )
}

export default ErrorPage
