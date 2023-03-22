import { Tab } from '@headlessui/react';
import ConferencePanel from '@/sections/home/conference-panel';
import GroupstagePanel from '@/sections/home/groupstage-panel';
import TabTitle from '@/components/tab-title';
import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';
import PlayoffPanel from '@/sections/home/playoff-panel';

const TabElement = ({ stages }) => {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className='flex justify-around  flex-wrap sm:flex-nowrap gap-2  m-auto w-full sm:w-[550px] py-8'>
        {
          stages.map((stage, index) => {
            return (
              <TabTitle key={index}>{stage?.name}</TabTitle>
            );
          })
        }
      </Tab.List>
      <Tab.Panels>
        {/*<Tab.Panel>*/}
        {/*  <ConferencePanel />*/}
        {/*</Tab.Panel>*/}
        <Tab.Panel>
          <GroupstagePanel />
        </Tab.Panel>

        <Tab.Panel>
          <PlayoffPanel />
        </Tab.Panel>

      </Tab.Panels>
    </Tab.Group>
  );
};


const Teams = () => {
  const article = useContext(articleCtx);
  const { teams, stages, stages_count } = article;
  return (
    <section className='default-section' id='teams'>
      <div className='page-container'>
        <div className='page-section-title'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>The biggest CODM League</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>{teams?.length} teams
            | {`${stages_count}`} |
            Global Competition
          </p>
        </div>

        <div className='card bg-soft-black px-6 my-6'>
          <TabElement stages={stages} />
        </div>

      </div>
    </section>
  );
};

export default Teams;