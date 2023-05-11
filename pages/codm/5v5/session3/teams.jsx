import { Tab } from '@headlessui/react';
import TabTitle from '@/components/tab-title';

const TabElement = ({ stages }) => {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className='flex justify-around  flex-wrap sm:flex-nowrap gap-2  m-auto w-full sm:w-[550px] py-8'>
        {
          stages.map((stage, index) => {
            return (
              <TabTitle className="!text-sm" key={index}>{stage?.name}</TabTitle>
            );
          })
        }
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div>TBD</div>
        </Tab.Panel>
        <Tab.Panel>
          <div>TBD</div>
        </Tab.Panel>
        <Tab.Panel>
          <div>TBD</div>
        </Tab.Panel>
        <Tab.Panel>
          <div>TBD</div>
        </Tab.Panel>

      </Tab.Panels>
    </Tab.Group>
  );
};


const Teams = ({ data }) => {

  const { teams, stages_count, stages } = data;

  return (
    <section className='default-section' id='teams'>
      <div className='page-container'>
        <div className='page-section-title'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>The biggest CODM League</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>{teams?.length} teams
            | {`${stages_count} Stages`} |
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