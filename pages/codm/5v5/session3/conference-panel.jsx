import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';

const GroupRegion = ({ region, teams }) => {
  return (
    <div>
      <div className='separator'>
        <div>{region}</div>
      </div>
      <div className='grid sm:grid-cols-8 grid-cols-3'>
        {
          teams.map((team, index) => {
            return (
              <div key={index} className='col-span-1'>
                <BoxTeam team={team} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

const BoxTeam = ({ team }) => {
  const { name, country, detail } = team;
  return (
    <div className='flex flex-col items-center font-inter my-2'>
      {/*<img src={logo} alt={name} className='w-[120px] mb-1' />*/}
      <div className='flag w-[120px] text-3xl mb-1 font-flag text-center'>
        {country  }
      </div>
      <div className='text-white text-center'>
        <h3 className='font-inter font-bold uppercase text-sm'>{name}</h3>
        <span className='text-dark-gray uppercase text-sm'>{detail}</span>
      </div>
    </div>
  );
};

const ConferencePanel = () => {
  const article = useContext(articleCtx);
  const { teams } = article;
  return (
    <div>
      <GroupRegion region='All' teams={teams} />
    </div>
  );
};

export default ConferencePanel;