import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';

const GroupTeam = ({ title, teams }) => {
  return (
    <div className='flex flex-col mb-6 border border-dotted border-white sm:px-6 px-1 py-3'>
      <h3 className='text-2xl font-bold text-white mb-6'>{title}</h3>
      <div className={`grid ${title ? 'sm:grid-cols-3 grid-cols-1' : 'sm:grid-cols-6 grid-cols-3'} gap-2`}>
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
          <p className='text-white text-center uppercase font-medium font-inter text-sm'>{team?.name}</p>
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
      <div className={`grid ${group.length > 1 ? 'grid-cols-2' : null} gap-2`}>
        {
          group.map((group, index) => {
            const teams = article?.teams?.filter((team) => team?.group === group);
            let groupName = "Group "+group;
            if(group === undefined){
              groupName = null
            }
            return (
              <GroupTeam key={index} title={groupName} teams={teams} />
            );
          })
        }
      </div>
    </div>
  );
};

export default GroupstagePanel;