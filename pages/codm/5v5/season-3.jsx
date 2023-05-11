import { useEffect, useState } from 'react';
import db from '@/db/db.json';
import articleCtx from '@/context/article-ctx';
import Head from 'next/head';
import NavbarMatch from '@/components/navbar-match';
import Hero from '@/sections/solo/hero';
import Headline from '@/sections/5v5/headline';
import Teams from '@/pages/codm/5v5/session3/teams';
import Format from '@/sections/solo/format';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';

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

  const data = {
    banner: 'banner/solo.mp4',
    format: [
      '3 Rounds - TPP',
      '1 Kill = 1 Point',
    ],
    stages_count: 4,
    stages: [
      {
        'name': 'Qualifiers A',
        'teams': '',
        'format': [],
      },
      {
        'name': 'Quarter Finals',
        'teams': '',
        'format': [],
      },
      {
        'name': 'Semi Finals',
        'teams': '',
        'format': [],
      },
      {
        'name': 'FInal',
        'teams': '',
        'format': [],
      },
    ],
    tournament_schedule: [
      {
        'title': 'Qualifiers A',
        'date': 'April 28, 2023 (12PM EST)',
      },
      {
        'title': 'Quarter Finals',
        'date': 'April 30, 2023 (12PM EST)',
      },
      {
        'title': 'Semi Finals',
        'date': 'May 06, 2023 (12PM EST)',
      },
      {
        'title': 'Finals',
        'date': 'May 10, 2023 (12PM EST)"',
      },
    ],
    participants: [],
    tagline: '',
    league: 'BattleForSupremacy.TV | 5v5 Multiplayer Season 3',
    totalParticipants: '100',
    rules: {
      'all': [
        {
          'title': 'Game Format',
          'list': [
            '🟢 Mode: HARDPOINT',
            'Round Limit: 250',
            'Time Limit: 600 SECONDS',
            '-',
            '🟢 Mode: SEARCH & DESTROY',
            'Round Limit: 7',
            'Time Limit: 120 SECONDS PER ROUND',
            'Overtime: YES',
            'Overtime: 10',
            '-',
            '🟢 Mode: CONTROL',
            'Round Limit: 3',
            'Time Limit: 90 SECONDS PER ROUND',
          ],
        },
        {
          'title': 'Stage Rules',
          'list': [
            '🟢 Qualifiers (Best of 1)',
            'SEARCH & DESTROY',
            '-',
            '🟢 Quarter Finals (Best of 3)',
            'HARDPOINT',
            'SEARCH & DESTROY',
            'CONTROL',
            '-',
            '🟢 Semi Finals (Best of 5)',
            'HARDPOINT',
            'SEARCH & DESTROY',
            'CONTROL',
            'HARDPOINT',
            'SEARCH & DESTROY',
            '-',
            '🟢 Finals (Best of 7)',
            'HARDPOINT',
            'SEARCH & DESTROY',
            'CONTROL',
            'HARDPOINT',
            'SEARCH & DESTROY',
            'CONTROL',
            'SEARCH & DESTROY',
          ],
        },
        {
          'title': 'Prize Distribution',
          'list': [
            'Total Prizepool:  USD 658',
            'Qualifiers Winners: $10 Per TEAM',
            'Quarter Finals Winners: $20 Per TEAM',
            'Semi - Finals Winners: $40 Per TEAM',
            'Finals CHAMPION: $290',
          ],
        },
      ],
      'note': [
        'Handcam is REQUIRED in FINALS',
        '❌Incomplete information, Wrong Telegram Name Format is not allowed to play',
        '➡️Failure to follow the rules will be automatically disqualified',
        '➡️If there\'s any problem during the event, BattleForSupremacy CODM Department will have the right to decide',
      ],
    },
  };

  const Layout = () => {
    return (
      <>
        <NavbarMatch />
        <div className='mt-[55px]' />
        <Hero data={data} />
        <Headline data={data} />
        <Teams data={data} />
        <Format data={data} />
        <Faq />
        <More />
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
          article ? <Layout /> : <Loader />
        }
      </articleCtx.Provider>
    </>
  );
};

export default Season3;