import Head from 'next/head';
import Hero from '@/sections/home/hero';
import Headline from '@/sections/home/headline';
import Match from '@/sections/home/match';


const Home = () => {
  return (
    <>
      <Head>
        <title>ESL PRO | Home</title>
      </Head>
      <Hero />
      <Headline />
      <Match />
    </>
  );
};

export default Home;