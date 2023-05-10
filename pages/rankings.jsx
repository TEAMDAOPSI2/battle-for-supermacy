import { useEffect, useState } from 'react';
import db from '@/db/db.json';
import articleCtx from '@/context/article-ctx';
import Head from 'next/head';
import NavbarMatch from '@/components/navbar-match';
import Standing from '@/sections/ranking/standing';
import StandingSolo from '@/sections/ranking/standing-solo';
import useProgressiveImage from '@/hooks/useProgressiveImage';
import starlink from '@/public/images/starlink_1.jpg';

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

  const bgImage = useProgressiveImage(starlink.src, starlink.src);

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
            <div className="card-standing relative" style={{backgroundImage: `url(${bgImage})`}}>
              <div className='filter absolute inset-0 bg-black/50 w-full h-full' />
              <Standing />
              <StandingSolo />
            </div>
          </>
        ) : (
          <Loader />
        )}
      </articleCtx.Provider>
    </>
  )
}

export default Rankings