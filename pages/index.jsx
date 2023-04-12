import Head from 'next/head';
import Hero from '@/sections/home/hero';
import Headline from '@/sections/home/headline';
import Teams from '@/sections/home/teams';
import Format from '@/sections/home/format';
import Slot from '@/sections/home/slots';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';
import NavbarMatch from '@/components/navbar-match';
import db from '@/db.json';
import articleCtx from '@/context/article-ctx';
import { useEffect, useState } from 'react';

const Home = () => {
  const [article, setArticle] = useState(null);

  const findArticle = (id) => {
    return db.series.find((series) => {
      return series?.season === id;
    });
  };

  useEffect(() => {
    const article = findArticle(6);
    console.log(article);
    setArticle(article);
  }, []);

  const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader" />
      </div>
    );
  };

  return (
    <>
      <articleCtx.Provider value={article}>
        <Head>
          <title>BattleForSupremacy.TV</title>
        </Head>
        {article ? (
          <>
            <NavbarMatch />
            <div className="mt-[55px]" />
            <Hero />
            <Headline />
            {/*<Match />*/}
            <Teams />
            <Format />
            <Slot />
            {/*<History />*/}
            <Faq />
            <More />
          </>
        ) : (
          <Loader />
        )}
      </articleCtx.Provider>
    </>
  );
};

export default Home;
