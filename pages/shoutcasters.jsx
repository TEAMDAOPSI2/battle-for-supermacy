import Head from 'next/head';
import ErrImg from '@/public/images/NINJA.png';
import CastersDE from '@/public/images/casters-de.svg';
import CastersMO from '@/public/images/casters-mo.svg';

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
  {
    name: 'NINJA',
  },
];

const GenPyramid = ({ global_ranks }) => {
  const totalItems = 8;
  const totalRows = 6;
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
           className={`flex flex-nowrap  ${row === (5 - 1) ? 'sm:justify-between justify-evenly' : 'justify-center'} ${row > 0 && 'sm:-mt-10 -mt-3'}`}>
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
          <div className='flex flex-col min-h-[680px] max-w-[1020px] mx-auto'>
            {/*<TeamList teams={casters} numItemsPerRow={2} type='shoutcasters' />*/}
            <div className="sm:flex hidden flex-col items-center">
              <img
                className='w-full'
                src={CastersDE.src}
                alt='Shoutcasters'
              />
            </div>
            <div className="sm:hidden flex flex-col items-center">
              <img
                className='w-full'
                src={CastersMO.src}
                alt='Shoutcasters'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shoutcasters;