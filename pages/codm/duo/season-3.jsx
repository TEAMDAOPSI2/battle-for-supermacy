import Head from 'next/head';
import db from '@/db/db.json';
import articleCtx from '@/context/article-ctx';
import { useEffect, useState } from 'react';
import NavbarMatch from '@/components/navbar-match';
import Hero from '@/sections/codm/solo/hero';
import Headline from '@/sections/codm/solo/headline';
import Teams from '@/sections/codm/duo/s3/teams';
import Format from '@/sections/codm/solo/format';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';
import Drawer from '@/public/images/solo/s2-drawer.png';
import BG from '@/public/images/starlink-5.webp';
import useProgressiveImage from '@/hooks/useProgressiveImage';

const Season3 = () => {
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

  const Leaderboard = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
      let timeout;
      const handleScroll = () => {
        setShowDrawer(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setShowDrawer(false);
        }, 1000);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timeout);
      };
    }, []);

    return (
      <div
        className={`drawer-overlay ${showDrawer ? 'drawer-overlay-active' : ''}`}
        onMouseEnter={() => setShowDrawer(true)}
        onMouseLeave={() => setShowDrawer(false)}
      >
        <img src={Drawer.src} className='w-[100px]' alt='drawer' />
      </div>
    );
  };

  const Solo = () => {
    const data = {
      banner: 'banner/codm-duo-s3.mp4',
      format: [
        '1 Kill = 1 Point',
        'No Placing Points',
        '3 Rounds - Third Person Perspective',
      ],
      participants: [{ 'code3': 'ARE' }, { 'code3': 'BGD' }, { 'code3': 'COL' }, { 'code3': 'FRA' }, { 'code3': 'GBR' }, { 'code3': 'IDN' }, { 'code3': 'IND' }, { 'code3': 'IRN' }, { 'code3': 'ITA' }, { 'code3': 'MLT' }, { 'code3': 'NGA' }, { 'code3': 'PAK' }, { 'code3': 'PHL' }, { 'code3': 'PNG' }, { 'code3': 'ROU' }, { 'code3': 'SGP' }, { 'code3': 'UKR' }, { 'code3': 'USA' }, { 'code3': 'VEN' }, { 'code3': 'ZMB' }],
      teams: [
        {
          'id': '2768',
        },
        {
          'id': '3126',
        },
        {
          'id': '4013',
        },
        {
          'id': '4016',
        },
        {
          'id': '4229',
        },
        {
          'id': '4981',
        },
        {
          'id': '6326',
        },
        {
          'id': '6362',
        },
        {
          'id': '6396',
        },
        {
          'id': '6419',
        },
        {
          'id': '6453',
        },
        {
          'id': '6485',
        },
        {
          'id': '6769',
        },
        {
          'id': '6777',
        },
        {
          'id': '7261',
        },
        {
          'id': '7303',
        },
        {
          'id': '7356',
        },
        {
          'id': '7500',
        },
        {
          'id': '7502',
        },
        {
          'id': '7651',
        },
        {
          'id': '7654',
        },
        {
          'id': '7657',
        },
        {
          'id': '7773',
        },
        {
          'id': '7777',
        },
        {
          'id': '7873',
        },
        {
          'id': '7989',
        },
        {
          'id': '8089',
        },
        {
          'id': '8094',
        },
        {
          'id': '8159',
        },
        {
          'id': '8173',
        },
        {
          'id': '8203',
        },
        {
          'id': '8303',
        },
        {
          'id': '8354',
        },
        {
          'id': '8372',
        },
        {
          'id': '8401',
        },
        {
          'id': '8410',
        },
        {
          'id': '8470',
        },
        {
          'id': '8472',
        },
        {
          'id': '8480',
        },
        {
          'id': '8563',
        },
        {
          'id': '8573',
        },
        {
          'id': '8578',
        },
        {
          'id': '8614',
        },
        {
          'id': '8660',
        },
        {
          'id': '8667',
        },
        {
          'id': '8708',
        },
        {
          'id': '8712',
        },
        {
          'id': '8723',
        },
        {
          'id': '8757',
        },
        {
          'id': '8767',
        },
      ],
      tagline: 'Dont hunt what you can\'t kill, every action has consequences - John Wick',
      league: 'BattleForSupremacy.TV : CODM - Duo Battle Royale Season-3',
      totalParticipants: '50',
      rules: {
        'all': [
          {
            'title': 'General Rules',
            'list': [
              '➡️ 3 Rounds - TPP',
              '➡️ 1 Kill = 1 Point',
              '➡️ No Placing Points',
            ],
          },
          {
            'title': 'Match Rules',
            'list': [
              '🟢 All weapons, skins,  and vehicles are allowed to use',
              '🟢 Class will be based from spin the wheel',
              '🟢 Most Wanted Player will be based from spin the wheel',
              '🟢 Failure to join the first game can join on the next round',
              '🟢 Trashtalk/Emotes are allowed',
            ],
          },
          {
            'title': 'Prize Rules',
            'list': [
              '🟢 Round 1 (Top 1 -8 Placing): 2$ Per Player',
              '🟢 Round 2 (Top 1 -8 Placing ): 2$ Per Player',
              '🟢 Round 3 (Top 1 -8 Placing): 2$ Per Player',
              '🟢 Champion: 96$ Duo',
              '🟢 2nd Place: 76$ Duo',
              '🟢 3rd Place: 56$ Duo',
              '🟢 4th Place: 44$ Duo',
              '🟢 5th Place: 32$ Duo',
              '🟢 6th Place: 28$ Duo',
              '🟢 7th Place: 24$ Duo',
              '🟢 8th Place: 16$ Duo',
              '🟢 Most Kill Player : 28$',
            ],
          },
        ],
        'note': [
          '➡️Failure to follow the rules will be automatically disqualified',
          '➡️If there\'s any problem during the event, BattleForSupremacy CODM Department will have the right to decide',
        ],
      },
      prizePool: '$588',
      totalTeams: '50',
    };

    const bgImage = useProgressiveImage(BG.src, BG.src);
    return (
      <>
        <NavbarMatch />
        <div className='mt-[55px]' />
        <div className='relative' style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          {/*<Leaderboa rd />*/}
          <div className='bg-black/50'>
            <Hero data={data} />
            <Headline data={data} />
            <Teams data={data} />
            <Format data={data} />
            <Faq />
            <More />
          </div>
        </div>
      </>
    );
  };


  return (
    <>
      <articleCtx.Provider value={article}>
        <Head>
          <title>BattleForSupremacy.TV</title>
        </Head>
        {
          article ? <Solo /> : <Loader />
        }
      </articleCtx.Provider>
    </>
  );
};

export default Season3;
