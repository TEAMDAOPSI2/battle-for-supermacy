import { useEffect, useState } from 'react';
import db from '@/db/db.json';
import articleCtx from '@/context/article-ctx';
import Head from 'next/head';
import NavbarMatch from '@/components/navbar-match';
import Standing from '@/sections/ranking/standing';
import StandingSolo from '@/sections/ranking/standing-solo';
import useProgressiveImage from '@/hooks/useProgressiveImage';
import starlink from '@/public/images/starlink_1.jpg';
import { Tab } from '@headlessui/react';
import TabTitle from '@/components/tab-title';
import CodmMultiplayer from '@/sections/ranking/codm-multiplayer';

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
      <div className='flex justify-center items-center h-screen'>
        <div className='loader' />
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
            <div className='mt-[55px]' />
            <div className='card-standing relative' style={{ backgroundImage: `url(${bgImage})` }}>
              <div className='bg-black/50'>
                {/*tab group*/}
                <div className='pt-10'>
                  <h1 className='text-center text-white text-2xl font-bold py-2'>CALL OF DUTY:MOBILE</h1>
                  <Tab.Group as='div' defaultIndex={3}>
                    <Tab.List
                      className='px-6 py-3 bg-soft-black/50 mx-auto w-fit rounded-md flex sm:flex-row flex-col justify-center items-center gap-3'>
                      <TabTitle>Solo</TabTitle>
                      <TabTitle>Duo</TabTitle>
                      <TabTitle>TEAM</TabTitle>
                      <TabTitle>5v5 Multiplayer</TabTitle>
                    </Tab.List>
                    <Tab.Panels className='mt-5'>
                      {/*<Tab.Panel>*/}
                      {/*  <Standing />*/}
                      {/*  <StandingSolo />*/}
                      {/*</Tab.Panel>*/}
                      <Tab.Panel>
                        <h1>Solo</h1>
                      </Tab.Panel>
                      <Tab.Panel>
                        <h1>Duo</h1>
                      </Tab.Panel>
                      <Tab.Panel>
                        <h1>Team</h1>
                      </Tab.Panel>
                      <Tab.Panel>
                        <CodmMultiplayer />
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>

              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </articleCtx.Provider>
    </>
  );
};

export default Rankings;