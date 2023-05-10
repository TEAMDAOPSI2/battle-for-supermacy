import { Tab } from '@headlessui/react';
import ConferencePanel from '@/sections/home/conference-panel';
import GroupstagePanel from '@/sections/home/groupstage-panel';
import TabTitle from '@/components/tab-title';
import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';
import PlayoffPanel from '@/sections/home/playoff-panel';

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
          { team?.code }
        </div>

        <div className='text'>
          <p className='text-white text-center uppercase font-medium font-inter text-sm'>{team?.name}</p>
        </div>
      </div>
    </div>
  );
};


const Teams = ({data}) => {
  const { participants: teams } = data;
  return (
    <section className='default-section' id='teams'>
      <div className='page-container'>
        <div className='page-section-title'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>The biggest CODM League</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>
            {data?.totalParticipants} Players | {teams.length} Countries
          </p>
        </div>

        <div className='card bg-soft-black px-6 my-6 py-3'>
          <div className='flex flex-col mb-6 border border-dotted border-white sm:px-6 px-1 py-3'>
            <h3 className='text-2xl font-bold text-white mb-6'>Country Participants</h3>
            <div className={`grid sm:grid-cols-6 grid-cols-3 gap-2`}>
              {
                teams.map((team, index) => (
                  <Team key={index} team={team} />
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Teams;