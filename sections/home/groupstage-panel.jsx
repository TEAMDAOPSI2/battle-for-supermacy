import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const GroupTeam = ({ title, teams }) => {
  return (
    <div className='flex flex-col mb-6'>
      <h3 className='text-2xl font-bold text-white mb-6'>{title}</h3>
      <div className='grid sm:grid-cols-2 grid-cols-1'>
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
      <div className='img w-[40px]'>
        <img src={team?.logo} alt={team?.name} />
      </div>
      <div className='text'>
        <p className='text-white sm:text-lg text-base uppercase font-medium font-inter'>{team?.name}</p>
      </div>
    </div>
  );
};

const GroupstagePanel = () => {
  const teams = [
    {
      name: 'Team Falcons',
      logo: 'https://eslpro.imgix.net/csgo/proleague/wp-content/uploads/2022/06/Falcons-Esports.png?auto=format%2Ccompress&w=150&h=150',
    },
    {
      name: 'Cloud9',
      logo: 'https://eslpro.imgix.net/imgcache/prodb/teamlogos/ad7/ad7da4c0-9021-4475-89cf-5a711aeb828a_transparent_standard.png?auto=compress,format&w=200',
    },
  ];
  return (
    <div className='py-6'>
      <div className='grid grid-cols-2'>
        <GroupTeam title='Group A' teams={teams} />
        <GroupTeam title='Group B' teams={teams} />
        <GroupTeam title='Group C' teams={teams} />
        <GroupTeam title='Group D' teams={teams} />
      </div>
      <div className='watch-btn'>
        <Link href='/'
              className='flex bg-secondary sm:w-1/5 w-full py-3 rounded-md items-center m-auto hover:bg-emerald-50 transition-all duration-75 ease-in-out'>
          <span className='m-auto font-medium font-inter'>
            <FontAwesomeIcon icon={faFile} /> RULES OVERVIEW
          </span>
        </Link>
      </div>
    </div>
  );
};

export default GroupstagePanel;