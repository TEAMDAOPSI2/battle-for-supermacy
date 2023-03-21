import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';

const GroupTeam = ({ title, teams }) => {
  return (
    <div className='flex flex-col mb-6 border border-dotted border-secondary p-2'>
      <h3 className='text-2xl font-bold text-white mb-6'>{title}</h3>
      <div className='grid sm:grid-cols-2 gap-2 grid-cols-1'>
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
    <div className='flex flex-row items-center font-inter gap-6'>
      {/*<div className='img w-[40px]'>*/}
      {/*  <img src={team?.logo} alt={team?.name} />*/}
      {/*</div>*/}

      <div className='flag w-[40px] text-3xl mb-1 font-flag text-center'>
        { team?.country }
      </div>

      <div className='text'>
        <p className='text-white sm:text-lg text-base uppercase font-medium font-inter'>{team?.name}</p>
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