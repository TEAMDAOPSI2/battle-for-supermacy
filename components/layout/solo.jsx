import Hero from '@/sections/solo/hero';
import NavbarMatch from '@/components/navbar-match';
import Headline from '@/sections/solo/headline';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';
import Format from '@/sections/solo/format';
import Teams from '@/sections/solo/teams';

const Solo = () => {
  const data = {
    format: [
      '3 Rounds - TPP',
      '1 Kill = 1 Point',
    ],
    participants: [
      {
        name: 'Ukraine',
        code: '🇺🇦',
      },
      {
        name: 'Indonesia',
        code: '🇮🇩',
      },
      {
        name: 'Italy',
        code: '🇮🇹',
      },
      {
        name: 'Philippines',
        code: '🇵🇭',
      },
      {
        name: 'Iran',
        code: '🇮🇷',
      },
      {
        name: 'Nigeria',
        code: '🇳🇬',
      },
      {
        name: 'Venezuela',
        code: '🇻🇪',
      },
      {
        name: 'Australia',
        code: '🇦🇺',
      },
      {
        name: 'Zambia',
        code: '🇿🇲',
      },
      {
        name: 'Singapore',
        code: '🇸🇬',
      },
      {
        name: 'Guyana',
        code: '🇬🇾',
      },
      {
        name: 'United Kingdom',
        code: '🇬🇧',
      },
      {
        name: 'Papua New Guinea',
        code: '🇵🇬',
      },
      {
        name: 'India',
        code: '🇮🇳',
      },
      {
        name: 'South Africa',
        code: '🇿🇦',
      },
      {
        name: 'Denmark',
        code: '🇩🇰',
      },
      {
        name: 'Israel',
        code: '🇮🇱',
      },
      {
        name: 'Uzbekistan',
        code: '🇺🇿',
      },
      {
        name: 'Jamaica',
        code: '🇯🇲',
      },
      {
        name: 'Colombia',
        code: '🇨🇴',
      },
      {
        name: 'Bangladesh',
        code: '🇧🇩',
      },
      {
        name: 'Russia',
        code: '🇷🇺',
      },
      {
        name: 'Turkey',
        code: '🇹🇷',
      },
      {
        name: 'United Arab Emirates',
        code: '🇦🇪',
      },
      {
        name: 'Pakistan',
        code: '🇵🇰',
      },
      {
        name: 'Kenya',
        code: '🇰🇪',
      },
      {
        name: 'France',
        code: '🇫🇷',
      },

    ],
    tagline: 'Dont hunt what you can\'t kill, every action has consequences - John Wick',
    league: 'BattleForSupremacy.TV: Solo Battle Royale',
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

export default Solo;