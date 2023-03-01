import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import ConferencePanel from '@/sections/home/conference-panel';
import GroupstagePanel from '@/sections/home/groupstage-panel';

const TabElement = () => {
  return (
    <Tab.Group defaultIndex={1}>
      <Tab.List className='flex justify-around m-auto w-[550px] py-8'>
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

const TabTitle = ({ children }) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
                <h3
          className={`uppercase text-xl text-secondary font-bold font-inter cursor-pointer hover:text-white hover:border-b-2 hover:border-b-white outline-0 ${selected ? 'text-white border-b-2 border-b-white' : ''}`}>
          {children}
        </h3>
      )}
    </Tab>
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