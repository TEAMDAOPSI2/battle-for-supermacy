import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';

const Team = ({ team }) => {
  const { name, country } = team;
  return (
    <div className='flex flex-col items-center font-inter border border-gray-600 p-3'>
      <div className='flag w-[120px] text-3xl mb-1 font-flag text-center'>
        {
          name === 'TBD' ? (<span className='text-white text-5xl'>?</span>) : (country)
        }
      </div>
      <div className='text-white text-center'>
        <h3 className='font-inter font-bold uppercase text-sm'>{name}</h3>
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