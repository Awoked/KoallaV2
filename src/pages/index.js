import FirstLoad from '@/components/FirstLoad';
import Head from 'next/head'

import MovieCardSection from '@/components/MovieCardSection';
import HeroSection from '@/components/HeroSection';


export default function Home({ firstLoad }) {


  return (
    <>
      <Head>
        <title>Koalla</title>
        <meta name="description" content="Koalla yeni nesil filmin tek adresi." />
        <meta name="keywords" content="Koalla, Film sitesi, Koalla online" />
      </Head>
      {
        firstLoad &&
        <FirstLoad />
      }
      <HeroSection />
      <MovieCardSection />
   
      {/* <iframe src="//vidmoly.to/embed-gn3mq95uldn3.html" scrolling="no" frameborder="0" width="640" height="360" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe> */}
    </>

  )
}

export async function getServerSideProps(context) {
  const firstLoadData = context.req.cookies?.firstLoad === undefined;
  return {
    props: {
      firstLoad: firstLoadData
    }
  }
}