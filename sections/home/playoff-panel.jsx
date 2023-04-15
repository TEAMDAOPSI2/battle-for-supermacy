import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';

const Team = ({ team }) => {
  const { name, country } = team;
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
          {
            name === 'TBD' ? (<span className='text-white text-5xl'>?</span>) : (country)
          }
        </div>

        <div className='text'>
          <p className='text-white text-center uppercase font-medium font-inter text-sm'>{team?.name}</p>
        </div>
      </div>
    </div>
  );
};


const PlayoffPanel = () => {
  const { final_stage } = useContext(articleCtx);
  return (
    <div className='py-6'>
      <div className='grid sm:grid-cols-6 gap-3 grid-cols-3'>
        {
          final_stage.map((team, index) => {
            return (
              <Team team={team} key={index} />
            );
          })
        }
      </div>
    </div>
  );
};

export default PlayoffPanel;