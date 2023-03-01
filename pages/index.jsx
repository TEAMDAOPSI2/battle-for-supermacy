import Head from 'next/head';
import Hero from '@/sections/home/hero';
import Headline from '@/sections/home/headline';
import Match from '@/sections/home/match';
import Teams from '@/sections/home/teams';
import Format from '@/sections/home/format';


const Home = () => {
  return (
    <>
      <Head>
        <title>ESL PRO | Home</title>
      </Head>
      <Hero />
      <Headline />
      <Match />
      <Teams />
      <Format/>
    </>
  );
};

export default Home;