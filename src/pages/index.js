import FirstLoad from '@/components/FirstLoad';
// import HeroSection from '@/components/HeroSection'
import MovieCardSection from '@/components/MovieCardSection';
import Head from 'next/head'

import dynamic from 'next/dynamic';

const DynamicHeroSection = dynamic(() => import("../components/HeroSection"), {
  loading: () => (<p>Loading...</p>),
  ssr: false
})
const DynamicMovieCardSection = dynamic(() => import("../components/MovieCardSection"), {
  loading: () => (<p>Loading...</p>),
})

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
      <DynamicHeroSection />
      <DynamicMovieCardSection />

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