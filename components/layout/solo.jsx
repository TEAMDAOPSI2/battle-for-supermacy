import Hero from '@/sections/codm/solo/hero';
import NavbarMatch from '@/components/navbar-match';
import Headline from '@/sections/codm/solo/headline';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';
import Format from '@/sections/codm/solo/format';
import Teams from '@/sections/codm/solo/teams';

const Solo = () => {
  const data = {
    banner: 'banner/solo.mp4',
    format: ['3 Rounds - TPP', '1 Kill = 1 Point'],
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
      code3: 'COL'
    }, {
      name: 'Bangladesh',
      code: '🇧🇩',
      code3: 'BGD',
    }, {
      name: 'Russia',
      code: '🇷🇺',
      code3: 'RUS'
    }, {
      name: 'Turkey',
      code: '🇹🇷',
      code3: 'TUR',
    }, {
      name: 'United Arab Emirates',
      code: '🇦🇪',
      code3: 'ARE'
    }, {
      name: 'Pakistan',
      code: '🇵🇰',
      code3: 'PAK',
    }, {
      name: 'Kenya',
      code: '🇰🇪',
      code3: 'KEN'
    }, {
      name: 'France',
      code: '🇫🇷',
      code3: 'FRA'
    },

    ],
    tagline: 'Dont hunt what you can\'t kill, every action has consequences - John Wick',
    league: 'BattleForSupremacy.TV: Solo Battle Royale',
    totalParticipants: '100',
    rules: {
      'all': [{
        'title': 'General Rules',
        'list': ['➡️ 3 Rounds - TPP', '➡️ 1 Kill = 1 Point', '➡️ No Placing Points'],
      }, {
        'title': 'Match Rules',
        'list': ['🟢 All weapons, skins,  and vehicles are allowed to use', '🟢 Class will be based from spin the wheel', '🟢 Most Wanted Player will be based from spin the wheel', '🟢 Failure to join the first game can join on the next round', '🟢 Trashtalk/Emotes are allowed'],
      }, {
        'title': 'Prize Rules',
        'list': ['🟢 Top 1  $48', '🟢 Top 2  $28', '🟢 Top 3  $24', '🟢 Top 4  $18', '🟢 Top 5  $16', '🟢 Top 6  $14', '🟢 Top 7  $12', '🟢 Top 8  $8', '🟢 Most Wanted Killer: $8 Per round', '🟢 $88 = For the Most Wanted Player who didn\'t die and became the LAST MAN STANDING each round'],
      }],
      'note': ['➡️Failure to follow the rules will be automatically disqualified', '➡️If there\'s any problem during the event, BattleForSupremacy CODM Department will have the right to decide'],
    },
  };

  return (<>
    <NavbarMatch />
    <div className='mt-[55px]' />
    <Hero data={data} />
    <Headline data={data} />
    <Teams data={data} />
    <Format data={data} />
    <Faq />
    <More />
  </>);
};

export default Solo;