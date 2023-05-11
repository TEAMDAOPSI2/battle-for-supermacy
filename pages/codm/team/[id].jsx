import Head from 'next/head';
import Hero from '@/sections/seasons/hero';
import Headline from '@/sections/home/headline';
import Teams from '@/sections/home/teams';
import Format from '@/sections/home/format';
import Slot from '@/sections/home/slots';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';
import NavbarMatch from '@/components/navbar-match';
import db from '@/db/db.json';
import articleCtx from '@/context/article-ctx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


// get url from router using getStaticProps
export async function getServerSideProps({ params }) {
  const article = db.series.find((series) => {
    return series?.season === parseInt(params.id);
  });

  // 404 if no article found
  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
}

const Season = ({article}) => {

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

export default Season;
