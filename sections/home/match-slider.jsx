import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const MatchBox = ({ time, teams, scores }) => {
  // if name > 10 char, then truncate
  teams.team1 = teams?.team1?.length > 10 ? teams?.team1?.slice(0, 6) + '...' : teams?.team1;
  teams.team2 = teams?.team2?.length > 10 ? teams?.team2?.slice(0, 6) + '...' : teams?.team2;
  return (
    <div className='match w-1/6 p-2 text-gray-300 font-plus-jakarta-sans'>
      <div className='date mb-2 font-semibold text-sm'>
        {new Date(time).toLocaleDateString('en-ID', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
      <div className='flex flex-col gap-2 text-sm'>
        <div className='team flex flex-row gap-1'>
          <div className='image w-[20px]'>
            <img
              src='https://eslpro.imgix.net/imgcache/prodb/teamlogos/2de/2de1b4b4-e742-4abb-af0a-8c61e9ee2507_heroic_logo_1x1_white_white_outline.png?auto=compress,format&w=300'
              alt='Team Liquid' />
          </div>
          <div className='team-name'>{teams.team1 ?? teams.team1}</div>
          <div className='score'>{scores.team1 ?? scores.team1}</div>
        </div>
        <div className='team flex flex-row gap-1'>
          <div className='image w-[20px]'>
            <img
              src='https://eslpro.imgix.net/imgcache/prodb/teamlogos/3ab/3abdb685-9c41-4c66-a96f-f7adb17d6d13_movistar_riderslogo.png?auto=compress,format&w=300'
              alt='Team Secret' />
          </div>
          <div className='team-name'>{teams.team2 ?? teams.team2}</div>
          <div className='score'>{scores.team2 ?? scores.team2}</div>
        </div>
      </div>
    </div>
  );
};

const MatchSlider = () => {
  const data = [
    {
      time: '2021-10-10T19:00:00.000Z',
      teams: {
        team1: 'Team Liquid',
        team2: 'Team Secret',
      },
      scores: {
        team1: 2,
        team2: 0,
      },
    },
    {
      time: '2021-10-10T19:00:00.000Z',
      teams: {
        team1: 'Boom Esports',
        team2: 'Team Secret',
      },
      scores: {
        team1: 1,
        team2: 2,
      },
    },
  ];

  return (
    <div className='match-slider my-6 flex'>
      <div className='prev'>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className='matches flex flex-1 bg-soft-black'>
        {/* foreach multiple 10 times */}
        {
          [...Array(6)].map((_, i) => {
            return (
              <MatchBox key={i} time={data[0].time} teams={data[0].teams} scores={data[0].scores} />
            );
          })
        }
      </div>
      <div className='next'>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default MatchSlider;