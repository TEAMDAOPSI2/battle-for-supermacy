import { Tab } from '@headlessui/react';
import TabTitle from '@/components/tab-title';
import ErrImg from '@/public/images/hex-err.png';
import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';

const Team = ({ team, type = '' }) => {
  let img = '';
  if (type === 'country') {
    img = `https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/hex-flags/${team.code3}.png`;
  } else {
    img = `https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/BFS/codm/team/${team.name}.png`;
  }
  return (
    <div className='flex items-center sm:w-2/12 w-4/12 '>
      {
        team.name && (
          <img
            src={img}
            alt={team.code}
            className='w-full h-full'
            loading={'lazy'}
            onError={(e) => {
              e.target.src = ErrImg.src;
            }}
          />
        )
      }
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

const Teams = () => {
  const article = useContext(articleCtx);
  console.log('article', article);
  const { teams, total_teams } = article;
  const teamA = teams.filter((team) => team.group === 'A');
  const teamB = teams.filter((team) => team.group === 'B');
  return (
    <section className='default-section' id='teams'>
      <div className='page-container'>
        <div className='page-section-title'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>The biggest CODM League</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>
            {total_teams} Teams
          </p>
        </div>

        {/*<div className='card bg-soft-black px-6 my-6 py-3'>*/}
        <div>
          <div className='flex flex-col mb-6 border-white sm:px-6 px-1 py-3 card-bfs relative'>
            {/*<div className='bordered w-full'>*/}
            {/*  <img src={bordered.src} alt='bordered' className='h-full w-full sm:block hidden' />*/}
            {/*  <img src={borderedMobile.src} alt='bordered' className='h-full w-full sm:hidden block' />*/}
            {/*</div>*/}
            <div className='card bg-soft-black px-3 py-6'>
              <Tab.Group>

                <Tab.List className='flex justify-center gap-5 py-6'>
                  <TabTitle>Teams </TabTitle>
                </Tab.List>

                <Tab.Panels>
                  <Tab.Panel as='div' className='p-2 pb-10'>
                    <div>
                      <h3 className='text-white uppercase text-center'>Group A</h3>
                      <div className='sm:block hidden'>
                        <TeamList teams={teamA} numItemsPerRow={6} type='player' />
                      </div>

                      <div className='sm:hidden block'>
                        <TeamList teams={teamA} numItemsPerRow={3} type='player' />
                      </div>
                    </div>
                    <div className="py-14">
                      <h3 className='text-white uppercase text-center'>Group B</h3>
                      <div className='sm:block hidden'>
                        <TeamList teams={teamB} numItemsPerRow={6} type='player' />
                      </div>

                      <div className='sm:hidden block'>
                        <TeamList teams={teamB} numItemsPerRow={3} type='player' />
                      </div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Teams;