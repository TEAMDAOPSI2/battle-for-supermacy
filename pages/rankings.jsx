import { useEffect, useState } from 'react';
import db from '@/db.json';
import articleCtx from '@/context/article-ctx';
import Head from 'next/head';
import NavbarMatch from '@/components/navbar-match';
import Hero from '@/sections/home/hero';
import Headline from '@/sections/home/headline';
import Teams from '@/sections/home/teams';
import Format from '@/sections/home/format';
import Slot from '@/sections/home/slots';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';
import Standing from '@/sections/ranking/standing';
import StandingSolo from '@/sections/ranking/standing-solo';

const Rankings = () => {
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
            <Standing />
            <StandingSolo />
          </>
        ) : (
          <Loader />
        )}
      </articleCtx.Provider>
    </>
  )
}

export default Rankings