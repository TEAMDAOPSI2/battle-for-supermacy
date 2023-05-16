import Head from 'next/head';
import db from '@/db/db.json';
import articleCtx from '@/context/article-ctx';
import { useEffect, useState } from 'react';
import NavbarMatch from '@/components/navbar-match';
import Hero from '@/sections/codm/solo/hero';
import Headline from '@/sections/codm/solo/headline';
import Teams from '@/sections/codm/solo/s2/teams';
import Format from '@/sections/codm/solo/format';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';
import Drawer from '@/public/images/solo/s2-drawer.png';
import BG from '@/public/images/starlink-5.webp';
import useProgressiveImage from '@/hooks/useProgressiveImage';

const Season2 = () => {
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
      banner: 'banner/solo.mp4',
      format: [
        '3 Rounds - TPP',
        '1 Kill = 1 Point',
      ],
      participants: [
        {
          name: 'Ukraine',
          code: '🇺🇦',
          code3: 'UKR',
        }, {
          name: 'Indonesia',
          code: '🇮🇩',
          code3: 'IDN',
        }, {
          name: 'Italy',
          code: '🇮🇹',
          code3: 'ITA',
        }, {
          name: 'Philippines',
          code: '🇵🇭',
          code3: 'PHL',
        }, {
          name: 'Iran',
          code: '🇮🇷',
          code3: 'IRN',
        }, {
          name: 'Nigeria',
          code: '🇳🇬',
          code3: 'NGA',
        }, {
          name: 'Venezuela',
          code: '🇻🇪',
          code3: 'VEN',
        }, {
          name: 'Australia',
          code: '🇦🇺',
          code3: 'AUS',
        }, {
          name: 'Zambia',
          code: '🇿🇲',
          code3: 'ZMB',
        }, {
          name: 'Singapore',
          code: '🇸🇬',
          code3: 'SGP',
        }, {
          name: 'Guyana',
          code: '🇬🇾',
          code3: 'GUY',
        }, {
          name: 'United Kingdom',
          code: '🇬🇧',
          code3: 'GBR',
        }, {
          name: 'Papua New Guinea',
          code: '🇵🇬',
          code3: 'PNG',
        }, {
          name: 'India',
          code: '🇮🇳',
          code3: 'IND',
        }, {
          name: 'South Africa',
          code: '🇿🇦',
          code3: 'ZAF',
        }, {
          name: 'Denmark',
          code: '🇩🇰',
          code3: 'DNK',
        }, {
          name: 'Israel',
          code: '🇮🇱',
          code3: 'ISR',
        }, {
          name: 'Uzbekistan',
          code: '🇺🇿',
          code3: 'UZB',
        }, {
          name: 'Jamaica',
          code: '🇯🇲',
          code3: 'JAM',
        }, {
          name: 'Colombia',
          code: '🇨🇴',
          code3: 'COL',
        }, {
          name: 'Bangladesh',
          code: '🇧🇩',
          code3: 'BGD',
        }, {
          name: 'Russia',
          code: '🇷🇺',
          code3: 'RUS',
        }, {
          name: 'Turkey',
          code: '🇹🇷',
          code3: 'TUR',
        }, {
          name: 'United Arab Emirates',
          code: '🇦🇪',
          code3: 'ARE',
        }, {
          name: 'Pakistan',
          code: '🇵🇰',
          code3: 'PAK',
        }, {
          name: 'Kenya',
          code: '🇰🇪',
          code3: 'KEN',
        }, {
          name: 'France',
          code: '🇫🇷',
          code3: 'FRA',
        },

      ],
      teams: [
        {
          'id': '6994',
        },
        {
          'id': '7500',
        },
        {
          'id': '7919',
        },
        {
          'id': '8410',
        },
        {
          'id': '8305',
        },
        {
          'id': '2848',
        },
        {
          'id': '8150',
        },
        {
          'id': '7224',
        },
        {
          'id': '3099',
        },
        {
          'id': '8175',
        },
        {
          'id': '7984',
        },
        {
          'id': '4857',
        },
        {
          'id': '7877',
        },
        {
          'id': '2769',
        },
        {
          'id': '8416',
        },
        {
          'id': '8485',
        },
        {
          'id': '7371',
        },
        {
          'id': '8445',
        },
        {
          'id': '8172',
        },
        {
          'id': '3078',
        },
        {
          'id': '8488',
        },
        {
          'id': '8383',
        },
        {
          'id': '7170',
        },
        {
          'id': '8379',
        },
        {
          'id': '8530',
        },
        {
          'id': '6777',
        },
        {
          'id': '2887',
        },
        {
          'id': '8448',
        },
        {
          'id': '8472',
        },
        {
          'id': '8350',
        },
        {
          'id': '7693',
        },
        {
          'id': '7225',
        },
        {
          'id': '8181',
        },
        {
          'id': '8553',
        },
        {
          'id': '4840',
        },
        {
          'id': '8705',
        },
        {
          'id': '8640',
        },
        {
          'id': '8475',
        },
        {
          'id': '8388',
        },
        {
          'id': '8476',
        },
        {
          'id': '7309',
        },
        {
          'id': '8184',
        },
        {
          'id': '8373',
        },
        {
          'id': '8089',
        },
        {
          'id': '2749',
        },
        {
          'id': '8307',
        },
        {
          'id': '8470',
        },
        {
          'id': '8169',
        },
        {
          'id': '8548',
        },
        {
          'id': '7989',
        },
        {
          'id': '7321',
        },
        {
          'id': '8422',
        },
        {
          'id': '6487',
        },
        {
          'id': '7261',
        },
        {
          'id': '7489',
        },
        {
          'id': '2740',
        },
        {
          'id': '8437',
        },
        {
          'id': '8389',
        },
        {
          'id': '8502',
        },
        {
          'id': '7366',
        },
        {
          'id': '8346',
        },
        {
          'id': '7358',
        },
        {
          'id': '8538',
        },
        {
          'id': '8641',
        },
        {
          'id': '8468',
        },
        {
          'id': '2753',
        },
        {
          'id': '2831',
        },
        {
          'id': '8473',
        },
        {
          'id': '8513',
        },
        {
          'id': '8181',
        },
        {
          'id': '6485',
        },
        {
          'id': '8392',
        },
        {
          'id': '6419',
        },
        {
          'id': '7885',
        },
        {
          'id': '8215',
        },
        {
          'id': '8250',
        },
        {
          'id': '3082',
        },
        {
          'id': '8438',
        },
        {
          'id': '8514',
        },
        {
          'id': '8386',
        },
        {
          'id': '7351',
        },
        {
          'id': '7502',
        },
        {
          'id': '7734',
        },
        {
          'id': '8217',
        },
        {
          'id': '8171',
        },
        {
          'id': '8569',
        },
        {
          'id': '8518',
        },
        {
          'id': '4021',
        },
        {
          'id': '8538',
        },
        {
          'id': '8503',
        },
        {
          'id': '4953',
        },
        {
          'id': '8045',
        },
        {
          'id': '8424',
        },
        {
          'id': '8587',
        },
        {
          'id': '6637',
        },
        {
          'id': '8069',
        },
        {
          'id': '8552',
        },
        {
          'id': '8055',
        },
        {
          'id': '2851',
        },
        {
          'id': '4229',
        },
        {},
        {
          'id': '8456',
        },
        {
          'id': '8418',
        },
        {
          'id': '8442',
        },
        {
          'id': '8432',
        },
        {
          'id': '8429',
        },
      ],
      tagline: 'Dont hunt what you can\'t kill, every action has consequences - John Wick',
      league: 'BattleForSupremacy.TV : CODM - Solo Battle Royale  Season-2',
      totalParticipants: '100',
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
              '🟢 Top 1  $48',
              '🟢 Top 2  $28',
              '🟢 Top 3  $24',
              '🟢 Top 4  $18',
              '🟢 Top 5  $16',
              '🟢 Top 6  $14',
              '🟢 Top 7  $12',
              '🟢 Top 8  $8',
              '🟢 Most Wanted Killer: $8 Per round',
              '🟢 $88 = For the Most Wanted Player who didn\'t die and became the LAST MAN STANDING each round',
            ],
          },
        ],
        'note': [
          '➡️Failure to follow the rules will be automatically disqualified',
          '➡️If there\'s any problem during the event, BattleForSupremacy CODM Department will have the right to decide',
        ],
      },
      prizePool: '$288',
      totalTeams: '100',
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
          <Leaderboard />
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

export default Season2;
