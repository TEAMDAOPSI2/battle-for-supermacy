import { useContext, useEffect, useState } from 'react';
import articleCtx from '@/context/article-ctx';
import starlink from '@/public/images/starlink_1.jpg';
import useProgressiveImage from '@/hooks/useProgressiveImage';
import * as url from 'url';
import ErrImg from '@/public/images/hex-err.png';


const RactangleTeamFlag = ({ name, flag = '', rank = '', className = '' }) => {
  return (
    <div className='relative'>
      <img className='sm:w-[190px] w-[90px] object-cover'
           src={`https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/bfs-ranks-6/${name}.png`} alt='' />
      {/*<div className="absolute top-0 right-0 mr-10 mt-3 rounded-full bg-primary w-[30px] h-[30px] flex items-center justify-center">*/}
      {/*  {rank}*/}
      {/*</div>*/}
    </div>
  );
};


const CodmTeamRanks = () => {
  const global_ranks =[
    {
      'country': '🇵🇭',
      'name': 'VAGABONDS ESPORTS',
      'rank': '1'
    },
    {
      'country': '🇮🇹',
      'name': 'EURO ESPORTS OSIRIS',
      'rank': '2'
    },
    {
      'country': '🇵🇭',
      'name': 'T.E.A.M SAND',
      'rank': '3'
    },
    {
      'country': '🇵🇭',
      'name': 'TEAM CALIX',
      'rank': '4'
    },
    {
      'country': '🇮🇳',
      'name': 'SG PHANTOM',
      'rank': '5'
    },
    {
      'country': '🇵🇭',
      'name': 'T.E.A.M KLAY',
      'rank': '6'
    },
    {
      'country': '🇵🇭',
      'name': 'ESCALADE ESPORTS',
      'rank': '7'
    },
    {
      'country': '🇵🇪',
      'name': 'EURO ESPORTS RAIJIN',
      'rank': '8'
    },
    {
      'country': '🇪🇬',
      'name': 'REDMOON',
      'rank': '9'
    },
    {
      'country': '🇲🇹',
      'name': 'SEVEN',
      'rank': '10'
    },
    {
      'country': '🇮🇹',
      'name': 'Legendary TEAM',
      'rank': '11'
    },
    {
      'country': '🇮🇳',
      'name': 'T.E.A.M $ALGO',
      'rank': '12'
    },
    {
      'country': '🇸🇦',
      'name': 'STELLAR ESPORTS',
      'rank': '13'
    },
    {
      'country': '🇮🇳',
      'name': 'SAVAGE AMK',
      'rank': '14'
    },
    {
      'country': '🇮🇳',
      'name': 'TNG NEXUS',
      'rank': '15'
    },
    {
      'country': '🇦🇺',
      'name': 'OBSERVANT FORCE',
      'rank': '16'
    },
    {
      'country': '🇮🇳',
      'name': 'TEAM Z',
      'rank': '17'
    },
    {
      'country': '🇵🇭',
      'name': 'RNT',
      'rank': '18'
    },
    {
      'country': '🇮🇷',
      'name': 'NS OFFICIAL',
      'rank': '18'
    },
    {
      'country': '🇵🇭',
      'name': 'OP ESPORTS',
      'rank': '21'
    },
    {
      'country': '🇨🇦',
      'name': 'XOTIC ESPORTS',
      'rank': '22'
    },
    {
      'country': '🇦🇪',
      'name': 'CALIX LEGACY',
      'rank': '23'
    },
    {
      'country': '🇷🇺',
      'name': 'RZN',
      'rank': '23'
    },
    {
      'country': '🇵🇭',
      'name': 'TEAM BIANCO',
      'rank': '23'
    },
    {
      'country': '🇵🇭',
      'name': 'NICAEA MINOKAWA',
      'rank': '26'
    },
    {
      'country': '🇵🇭',
      'name': 'ALLSTAR GAMING',
      'rank': '27'
    },
    {
      'country': '🇨🇦',
      'name': 'CARTEL BEGGARS',
      'rank': '28'
    },
    {
      'country': '🇨🇦',
      'name': 'TEAM UGE',
      'rank': '28'
    },
    {
      'country': '🇨🇦',
      'name': 'VK ESPORTS',
      'rank': '28'
    },
    {
      'country': '🇨🇦',
      'name': 'NORD',
      'rank': '31'
    },
    {
      'country': '🇨🇦',
      'name': 'PH_CLAN',
      'rank': '31'
    },
    {
      'country': '🇨🇦',
      'name': 'TSG RAGNAROK',
      'rank': '33'
    },
    {
      'country': '🇨🇦',
      'name': 'TEAM ALPHA',
      'rank': '33'
    },
    {
      'country': '🇨🇦',
      'name': 'MANDURUGAS DEALS',
      'rank': '35'
    },
    {
      'country': '🇨🇦',
      'name': 'WAFFEN ESPORTS',
      'rank': '36'
    },
    {
      'country': '🇨🇦',
      'name': 'VA EROS',
      'rank': '36'
    }
  ];

  const Team = ({ team, type }) => {
    const img = `https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/BFS/codm/team-ranks/${team.name}.png`;

    return (
      <div className='flex flex-col relative items-center sm:w-2/12 w-4/12 '>
        {
          team.name !== '' ? (
            <>
              <img
                src={img}
                alt={team.name}
                title={team.name}
                className='w-full h-full'
                loading={'lazy'}
                onError={(e) => {
                  e.target.src = ErrImg.src;
                }}
              />
              <div className='absolute left-0 top-1/3 rounded-full bg-secondary text-white w-[30px] h-[30px] flex items-center justify-center'>
                {team.rank}
              </div>
            </>
          ) : (<div className='w-full h-full block' />)
        }
      </div>
    );
  };


  const GenPyramid = ({ global_ranks }) => {
    const totalItems = 12;
    const totalRows = 5;
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
          const rank = global_ranks[currentItem];
          items.push(
            <RactangleTeamFlag key={index} name={rank?.name} flag={rank?.country} rank={rank?.rank}
                               className='sm:w-[70%] w-full' />,
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
      <div className='pyramid-container sm:max-w-full max-w-[300px] m-auto'>
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


  return (
    <section className='default-section'>
      <div className='page-container'>
        <div className='page-section-title mb-5 bg-black/40 py-4 rounded-md'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>POWER RANKINGS TEAM - BATTLE ROYALE</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>
            As of June 13, 2023
          </p>
        </div>
        <div className='card rounded-md p-3'>
          {/*<div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>*/}
          {/*  /!*{*!/*/}
          {/*  /!*  pyramid.map((row, index) => {*!/*/}
          {/*  /!*    return (*!/*/}
          {/*  /!*      <div className="flex flex-col items-center justify-center">*!/*/}
          {/*  /!*        <RactangleTeamFlag key={index} name={rank?.name} flag={rank?.country} className="sm:w-[70%] w-full" />*!/*/}
          {/*  /!*      </div>*!/*/}
          {/*  /!*    )*!/*/}
          {/*  /!*  })*!/*/}
          {/*  /!*}*!/*/}

          {/*</div>*/}

          {/*<GenPyramid global_ranks={global_ranks} />*/}

          <div>
            <div className='sm:block hidden'>
              <TeamList teams={global_ranks} numItemsPerRow={5} type='player' />
            </div>

            <div className='sm:hidden block'>
              <TeamList teams={global_ranks} numItemsPerRow={3} type='player' />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default CodmTeamRanks;