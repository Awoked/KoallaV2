import FirstLoad from '@/components/FirstLoad';
import HeroSection from '@/components/HeroSection'
import Head from 'next/head'

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