import NavbarMatch from '@/components/navbar-match';
import Hero from '@/sections/solo/hero';
import Headline from '@/sections/5v5/headline';
import Teams from '@/sections/solo/teams';
import Format from '@/sections/solo/format';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';

const Lobby5 = () => {
  const data = {
    banner: 'banner/solo.mp4',
    format: [
      '3 Rounds - TPP',
      '1 Kill = 1 Point',
    ],
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
        "title": "Qualifiers A",
        "date": "April 28, 2023 (12PM EST)"
      },
      {
        "title": "Quarter Finals",
        "date": "April 30, 2023 (12PM EST)"
      },
      {
        "title": "Semi Finals",
        "date": "May 06, 2023 (12PM EST)"
      },
      {
        "title": "Finals",
        "date": "May 10, 2023 (12PM EST)\""
      }
    ],
    participants: [],
    tagline: '',
    league: 'BattleForSupremacy.TV | 5v5 Multiplayer Season 3',
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

export default Lobby5;