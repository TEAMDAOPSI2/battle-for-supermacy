const GroupRegion = ({ region, teams }) => {
  const x = {
    name: 'Team Falcons',
    logo: 'https://eslpro.imgix.net/csgo/proleague/wp-content/uploads/2022/06/Falcons-Esports.png?auto=format%2Ccompress&w=150&h=150',
    detail: 'ecl 142',
  };
  return (
    <div>
      <div className='separator'>
        <div>{region}</div>
      </div>
      <div className='grid sm:grid-cols-8 grid-cols-3'>
        {
          [x, x, x, x, x, x, x, x, x, x, x].map((team, index) => {
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
  const { name, logo, detail } = team;
  return (
    <div className='flex flex-col items-center font-inter my-2'>
      <img src={logo} alt={name} className='w-[120px] mb-1' />
      <div className='text-white text-center'>
        <h3 className='font-inter font-bold uppercase text-sm'>{name}</h3>
        <span className='text-dark-gray uppercase text-sm'>{detail}</span>
      </div>
    </div>
  );
};

const ConferencePanel = () => {
  return (
    <div>
      <GroupRegion region='Europe' teams={[]} />
    </div>
  );
};

export default ConferencePanel;