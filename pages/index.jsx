import Head from 'next/head';
import Hero from '@/sections/home/hero';
import Headline from '@/sections/home/headline';
import Match from '@/sections/home/match';
import Teams from '@/sections/home/teams';
import Format from '@/sections/home/format';
import Slot from '@/sections/home/slots';
import History from '@/sections/home/history';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';

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
      <Format />
      <Slot />
      <History />
      <Faq />
      <More />
    </>
  );
};

export default Home;
