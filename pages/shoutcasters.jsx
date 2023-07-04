import Head from 'next/head';
import ErrImg from '@/public/images/NINJA.png';

const casters = [
  {
    name: 'guila',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: '1185',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'NINJA',
  },
  {
    name: '1227',
  },
  {
    name: 'NINJA C',
  },
  {
    name: 'NINJA',
  },
  {
    name: 'NINJA',
  },
];

const GenPyramid = ({ global_ranks }) => {
  const totalItems = 8;
  const totalRows = 3;
  const pyramid = [];
  let currentItem = 0;
  // row 1 = 1
  // row 2 = 2
  // row 3 = 3
  // row 4 = 4
  // row 5 = 5
  // generate pyramid with 12 items and 5 rows
  // Calculate the number of items in each row of the pyramid
  const itemsPerRow = [];
  let remainingItems = totalItems;
  for (let i = 1; i <= totalRows; i++) {
    const items = Math.min(i, remainingItems);
    itemsPerRow.push(items);
    remainingItems -= items;
  }

  // Generate the pyramid rows
  let index = 0;
  for (let row = 0; row < totalRows; row++) {
    const items = [];
    for (let col = 0; col < itemsPerRow[row]; col++) {
      if (currentItem < totalItems) {
        const team = global_ranks[currentItem];
        items.push(
          <Team team={team} type='casters' />,
        );
        currentItem++;
        index++;
      }
    }
    pyramid.push(
      <div key={row}
           className={`flex  ${row === (5 - 1) ? 'sm:justify-between justify-evenly' : 'justify-center'} ${row > 0 && 'sm:-mt-10 -mt-3'}`}>
        {items}
      </div>,
    );
  }

  // Render the pyramid container
  return (
    <div className='pyramid-container flex flex-col w-full sm:max-w-full m-auto'>
      {pyramid}
    </div>
  );
};
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
  const img = team?.name ? `https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/BFS/gamemasters/${team?.name}.png` : ErrImg;

  return (
    <div className='relative'>
      <img className='sm:w-[190px] w-[120px] object-cover px-1 sm:mb-3 mb-0'
           src={img}
           onError={(e) => {
             e.target.onerror = null;
             e.target.src = ErrImg;
           }}
           alt='' />
      {/*<div className="absolute top-0 right-0 mr-10 mt-3 rounded-full bg-primary w-[30px] h-[30px] flex items-center justify-center">*/}
      {/*  {rank}*/}
      {/*</div>*/}
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
            <h2 className='text-[3.3rem] font-bold font-inter text-center'>Shoutcasters</h2>
          </div>
          <div className='flex flex-col items-center justify-center min-h-[500px] max-w-[1020px] mx-auto'>
            {/*<TeamList teams={casters} numItemsPerRow={2} type='shoutcasters' />*/}
            <GenPyramid global_ranks={casters} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Shoutcasters;