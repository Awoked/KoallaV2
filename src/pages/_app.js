import Layout from '@/layout/Layout'
import '@/styles/globals.css'

import { Comfortaa } from 'next/font/google'
import { SessionProvider } from "next-auth/react";


const comfortaa = Comfortaa({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className={comfortaa.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </SessionProvider>
  )
}
