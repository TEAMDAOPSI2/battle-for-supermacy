import Head from 'next/head';
import ErrImg from '@/public/images/hex-err.png';

const casters = [
  {
    name: 'guila',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: '1185',
    image: 'https://via.placeholder.com/150',
  },
];

const TeamList = ({ teams, numItemsPerRow, type }) => {
  // const totalRows = Math.ceil(teams.length / numItemsPerRow);
  const totalRows = Math.ceil(teams.length / numItemsPerRow) + Math.ceil((teams.length % numItemsPerRow) / 2);

  let teamIndex = 0;
  let rows = [];

  for (let i = 1; i <= totalRows; i++) {
    const rowItems = [];

    if (i % 2 === 0) {
      // even row
      for (let j = 0; j < numItemsPerRow - 1; j++) {
        if (teamIndex < teams.length) {
          rowItems.push(<Team team={teams[teamIndex]} type={type} />);
          teamIndex++;
        } else {
          // add empty data to fill row
          rowItems.push(<div />);
        }
      }
    } else {
      // odd row
      const itemsInRow = Math.min(numItemsPerRow, teams.length - teamIndex + 1);
      for (let j = 0; j < itemsInRow; j++) {
        if (teamIndex < teams.length) {
          rowItems.push(<Team team={teams[teamIndex]} type={type} />);
          teamIndex++;
        } else {
          // add empty data to fill row
          rowItems.push(<div className={`w-${12 / numItemsPerRow}/12`} />);
        }
      }
    }

    rows.push(<div className='flex flex-row flex-wrap justify-center'>{rowItems}</div>);
  }

  return <div className='wrapper-teams-list-hex mx-auto'>{rows}</div>;
};
const Team = ({ team, type }) => {
  const img = `https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/BFS/gamemasters/${team.name}.png`;

  return (
    <div className='flex flex-col relative items-center sm:w-3/12 w-4/12 px-2'>
      {
        team.name !== '' ? (
          <>
            <img
              src={img}
              alt={team.name}
              className='w-full h-full'
              loading={'lazy'}
              onError={(e) => {
                e.target.src = ErrImg.src;
              }}
            />
          </>
        ) : (<div className='w-full h-full block' />)
      }
    </div>
  );
};

function Shoutcasters() {
  return (
    <>
      <Head>
        <title>Shoutcasters | BattleForSupremacy.TV</title>
      </Head>
      <section className='default-section'>
        <div className='px-2'>
          <div className='page-section-title'>
            <h2 className='font-bold font-inter text-center'>Shoutcasters</h2>
          </div>
          <div className='flex flex-col items-center justify-center min-h-[500px] max-w-[1020px] mx-auto'>
            <TeamList teams={casters} numItemsPerRow={4} type='shoutcasters' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Shoutcasters;