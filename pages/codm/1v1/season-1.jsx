import { useEffect, useState } from 'react';
import db from '@/db/db.json';
import articleCtx from '@/context/article-ctx';
import Head from 'next/head';
import NavbarMatch from '@/components/navbar-match';
import Hero from '@/sections/codm/solo/hero';
import Headline from '@/sections/codm/1v1/headline';
import Teams from '@/sections/codm/1v1/session1/teams';
import Format from '@/sections/codm/1v1/session1/format';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';

const Season1 = () => {

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

  const Layout = () => {
    const data = {
      banner: 'banner/1v1-Multiplayer-s1.mp4',
      format: [
        '3 Rounds - TPP',
        '1 Kill = 1 Point',
      ],
      stages_count: 5,
      stages: [
        {
          'name': 'participants',
          'teams': '',
          'format': [],
        },
        {
          'name': 'Countries',
          'teams': '',
          'format': [],
        },
      ],
      tournament_schedule: [
        {
          'title': 'Qualifiers',
          'date': '1 - 30 May 2023 (12PM EST)',
        },
        {
          'title': 'Best of 16 ',
          'date': 'May 31,2023 (12PM EST)',
        },
        {
          'title': 'Quarter Finals',
          'date': 'June 01,2023 (12PM EST)',
        },
        {
          'title': 'Semi Finals',
          'date': 'june 03,2023 (12PM EST)',
        },
        {
          'title': 'Finals',
          'date': 'June 09,2023 (12PM EST)',
        },
      ],
      teams: [
        {
          "id": "2753"
        },
        {
          "id": "8472"
        },
        {
          "id": "7224"
        },
        {
          "id": "8660"
        },
        {
          "id": "6487"
        },
        {
          "id": "8045"
        },
        {
          "id": "8474"
        },
        {
          "id": "8734"
        },
        {
          "id": "7309"
        },
        {
          "id": "8307"
        },
        {
          "id": "7366"
        },
        {
          "id": "2831"
        },
        {
          "id": "8230"
        },
        {
          "id": "7989"
        },
        {
          "id": "8730"
        },
        {
          "id": "7885"
        },
        {
          "id": "8721"
        },
        {
          "id": "8305"
        },
        {
          "id": "2749"
        },
        {
          "id": "8478"
        },
        {
          "id": "3125"
        },
        {
          "id": "7919"
        },
        {
          "id": "8345"
        },
        {
          "id": "8167"
        },
        {
          "id": "8514"
        },
        {
          "id": "7261"
        },
        {
          "id": "8089"
        },
        {
          "id": "8445"
        },
        {
          "id": "8169"
        },
        {
          "id": "8410"
        },
        {
          "id": "3099"
        },
        {
          "id": "3078"
        },
        {
          "id": "8739"
        },
        {
          "id": "7773"
        },
        {
          "id": "8470"
        },
        {
          "id": "8424"
        },
        {
          "id": "7928"
        },
        {
          "id": "8475"
        },
        {
          "id": "8727"
        }
      ],
      participants: [
        {
          "code3": "ARE"
        },
        {
          "code3": "DOM"
        },
        {
          "code3": "EGY"
        },
        {
          "code3": "IDN"
        },
        {
          "code3": "IND"
        },
        {
          "code3": "IRN"
        },
        {
          "code3": "NGA"
        },
        {
          "code3": "PHL"
        },
        {
          "code3": "PNG"
        },
        {
          "code3": "RUS"
        },
        {
          "code3": "TUR"
        },
        {
          "code3": "UKR"
        },
        {
          "code3": "VEN"
        },
        {
          "code3": "ZMB"
        }
      ],
      tagline: '',
      league: 'BattleForSupremacy.TV | BattleForSupremacyTV: 1v1 Multiplayer',
      totalParticipants: '14',
      rules: {
        'all': [
          {
            'title': 'In Game',
            'list': [
              '🟢 No Camping',
              '🟢 No Behind Glitch over 5sec',
              '🟢 No Throwables (Grenade, Cluster',
              '🟢 No Using of Secondary Weapon',
              '🟢 No Score streaks',
              '-',
              'Banned Perks:',
              '🟢 Dead silence',
              '🟢 Recon',
              '🟢 Tracker',
              '🟢 Alert',
              '🟢 High Alert',
              '🟢 Martyrdom',
              '-',
              'Marksman:',
              '🟢 SKS not allowed',
              '-',
              'No show, win by default'

            ],
          },
          {
            'title': 'Stage Rules',
            'list': [
              'Qualifiers (Best of 3):',
              '🟢 Only (BY15, KRM or HS0405) are allowed\n',
              '🟢 Only (BY15, KRM or HS0405) are allowed',
              '-',
              'Round of 16 (Best of 3):',
              '🟢 Raise to 20 Kills',
              '🟢 SMG Only',
              '-',
              'Quarter Finals (Best of 3):',
              '🟢 Raise to 25 Kills',
              '🟢 Marksman Only',
              '-',
              'Semi Finals (Best of 5):',
              '🟢 Raise to 15 Kills',
              '🟢 Sniper only',
              '-',
              'Finals (Best of 7):',
              '🟢 Raise to 25 Kills',
              '🟢 TBA',
            ],
          },
          {
            'title': 'Prize Distribution',
            'list': [
              'TBA'
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
      totalTeams: '39',
      prizePool: 'TBA',
    };
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

export default Season1;