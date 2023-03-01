import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExplosion } from '@fortawesome/free-solid-svg-icons';
import { Tab } from '@headlessui/react';
import TabTitle from '@/components/tab-title';

const FormatBoxTop = ({ title, list }) => {
  return (
    <div className='flex flex-col format-list-wrapper'>
      <h3 className='text-2xl font-bold font-inter text-secondary uppercase mb-5 min-h-[70px]'>{title}</h3>
      <ul>
        {
          list.map((item, index) => (
            <li key={index} className='font-inter text-white list-none'>
              <FontAwesomeIcon icon={faExplosion} /> {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const Format = () => {
  return (
    <section className='default-section home--format'>
      <div className='page-container'>
        <div className='page-section-title mb-5'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>Format</h2>
        </div>

        <div className='card bg-soft-black p-5'>
          <div className='grid sm:grid-cols-3 grid-cols-1 gap-10'>
            <FormatBoxTop title='Conference Stage (Season 17)'
                          list={['16 teams', 'Double Elimination', 'Best of 3', 'Top 8 advance to Group Stage']} />
            <FormatBoxTop title='Group Stage'
                          list={['16 teams', 'Double Elimination', 'Best of 3', 'Top 8 advance to Playoffs']} />
            <FormatBoxTop title='Playoffs'
                          list={['8 teams', 'Double Elimination', 'Best of 3', 'Single Elimination bracket']} />
          </div>

          <div className='separator py-10'>
            <div>FORMAT DETAILS</div>
          </div>

          {/*  tab panels */}
          <Tab.Group>
            <Tab.List className='flex justify-center gap-5 py-6'>
              <TabTitle>Group Stage</TabTitle>
              <TabTitle>Playoffs</TabTitle>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <img src="https://eslpro.imgix.net/csgo/proleague/wp-content/uploads/2023/02/epl-17-bracket-pls-work-scaled.jpg?w=1710" alt="" loading='lazy' />
              </Tab.Panel>
              <Tab.Panel>
                <img src="https://eslpro.imgix.net/csgo/proleague/wp-content/uploads/2022/12/EPL-17-Playoff-Bracket-2.jpg?w=1920" alt="" loading='lazy' /> 
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

        </div>


      </div>
    </section>
  );
};

export default Format;