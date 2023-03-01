import MatchSlider from '@/sections/home/match-slider';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const BoxTeam = (props) => {
  const { teamName, teamLogo } = props;
  return (
    <div className='flex flex-col items-center'>
      <div className='image'>
        <img
          className='w-[180px] object-contain'
          src={teamLogo} alt={teamName} />
      </div>
      <div className='team-name w-full text-center flex items-center pt-4'>
        <p
          className='uppercase bg-soft-black w-10/12 m-auto py-3 font-bold text-xl text-white font-inter'>{teamName}</p>
      </div>
    </div>
  );
};

const Match = () => {
  return (
    <section className='default-section'>
      <div className='page-container'>
        <div className='next-match grid grid-cols-2 relative'>
          <BoxTeam teamName='Heroic'
                   teamLogo='https://eslpro.imgix.net/imgcache/prodb/teamlogos/2de/2de1b4b4-e742-4abb-af0a-8c61e9ee2507_heroic_logo_1x1_white_white_outline.png?auto=compress,format&w=300' />
          <BoxTeam teamName='Moviestar riders'
                   teamLogo='https://eslpro.imgix.net/imgcache/prodb/teamlogos/3ab/3abdb685-9c41-4c66-a96f-f7adb17d6d13_movistar_riderslogo.png?auto=compress,format&w=300' />
          <div className='absolute top-1/2 left-1/2 text-white text-lg font-bold -ml-2'>VS</div>
        </div>
        <div className='time-wrapper relative -mt-3'>
          <div
            className='time m-auto w-[280px] bg-secondary font-plus-jakarta-sans font-bold flex flex-col items-center p-4'>
            <p>Wednesday, March 1 2023</p>
            <p className='text-xl font-bold font-inter'>19:00 PM</p>
          </div>
        </div>
        <MatchSlider />
        <div className='watch-btn'>
          <Link href='/'
                className='flex bg-secondary w-full py-3 rounded-md items-center hover:bg-emerald-50 transition-all duration-75 ease-in-out'>
            <span className='m-auto font-bold font-inter'>WATCH NOW</span>
          </Link>
        </div>
        <div className='flex items-center py-3'>
          <Link href='/#teams' className='m-auto text-secondary text-4xl transform animate-bounce'>
            <FontAwesomeIcon icon={faChevronDown}  />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Match;