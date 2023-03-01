import { Tab } from '@headlessui/react';
import ConferencePanel from '@/sections/home/conference-panel';
import GroupstagePanel from '@/sections/home/groupstage-panel';
import TabTitle from '@/components/tab-title';

const TabElement = () => {
  return (
    <Tab.Group defaultIndex={1}>
      <Tab.List className='flex justify-around  flex-wrap sm:flex-nowrap gap-2  m-auto w-full sm:w-[550px] py-8'>
        <TabTitle>Conference Stage</TabTitle>
        <TabTitle>Group Stage</TabTitle>
        <TabTitle>Playoffs</TabTitle>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <ConferencePanel />
        </Tab.Panel>
        <Tab.Panel>
          <GroupstagePanel />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};



const Teams = () => {
  return (
    <section className='default-section' id='teams'>
      <div className='page-container'>
        <div className='page-section-title'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>The biggest CS:GO League</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>44 teams | 3 stages |
            Global Competition
          </p>
        </div>

        <div className='card bg-soft-black px-6 my-6'>
          <TabElement />
        </div>

      </div>
    </section>
  );
};

export default Teams;