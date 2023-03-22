import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';

const GroupTeam = ({ title, teams }) => {
  return (
    <div className='flex flex-col mb-6 border border-dotted border-white sm:px-6 px-1 py-3'>
      <h3 className='text-2xl font-bold text-white mb-6'>{title}</h3>
      <div className='grid sm:grid-cols-3 gap-2 grid-cols-1'>
        {
          teams.map((team, index) => {
            return (
              <Team key={index} team={team} />
            );
          })
        }
      </div>
    </div>
  );
};

const Team = ({ team }) => {
  return (
    <div className='flex flex-col items-center font-inter gap-6 relative'>
      <svg viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        {/*stroke gradient*/}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0070f3" />
            <stop offset="100%" stopColor="#db2b42" />
          </linearGradient>
        </defs>

        <polygon
          className="relative h-[123px]"
          stroke={'url(#gradient)'}
          fill='transparent'
          strokeWidth='1'
          height="80px"
          points='50 1 95 25 95 75 50 99 5 75 5 25' />
      </svg>

      <div className='absolute w-10/12 h-full flex flex-col justify-center items-center'>
        <div className='flag w-[40px] text-3xl mb-1 font-flag text-center'>
          { team?.country }
        </div>

        <div className='text'>
          <p className='text-white text-center uppercase font-medium font-inter sm:text-base text-sm'>{team?.name}</p>
        </div>
      </div>
    </div>
  );
};

const GroupstagePanel = () => {
  const article = useContext(articleCtx);
  const { teams } = article;
  const group = [...new Set(teams.map((team) => team?.group))];



  return (
    <div className='py-6'>
      <div className='grid grid-cols-2 gap-2'>
        {
          group.map((group, index) => {
            const teams = article?.teams?.filter((team) => team?.group === group);
            return (
              <GroupTeam key={index} title={`Group ${group}`} teams={teams} />
            );
          })
        }
      </div>
      {/*<div className='watch-btn'>*/}
      {/*  <Link href='/'*/}
      {/*        className='flex bg-secondary sm:w-1/5 w-full py-3 rounded-md items-center m-auto hover:bg-emerald-50 transition-all duration-75 ease-in-out'>*/}
      {/*    <span className='m-auto font-medium font-inter'>*/}
      {/*      <FontAwesomeIcon icon={faFile} /> RULES OVERVIEW*/}
      {/*    </span>*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </div>
  );
};

export default GroupstagePanel;