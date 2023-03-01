import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExplosion } from '@fortawesome/free-solid-svg-icons';

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
          <div className='grid grid-cols-3 gap-10'>
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

        </div>


      </div>
    </section>
  );
};

export default Format;