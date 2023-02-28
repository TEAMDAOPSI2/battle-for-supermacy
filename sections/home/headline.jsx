import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const BoxHeadline = (props) => {
  const { title, value } = props;
  return (
    <div className='flex flex-col items-center font-inter py-4 gap-3 bg-soft-black my-3'>
      <span className='text-white text-lg uppercase text-xl'>{title}</span>
      <h3 className='text-[2.5rem] font-bold text-secondary'>{value}</h3>
    </div>
  );
};

const BoxSecondHeadline = (props) => {
  const { title, value } = props;
  return (
    <div className='flex flex-col items-center font-inter py-4 gap-3 bg-soft-black my-3 uppercase'>
      <h3 className='text-2xl font-bold text-secondary'>{title}</h3>
      <span className='text-white text-lg uppercase text-lg'>{value}</span>
    </div>
  );
};

const Headline = () => {
  return (
    <section className='home--headline default-section'>
      <div className='page-container'>
        <div className='mb-5'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>Esports at its purest</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>
            A gateway to the top for all ESL Pro Tour Competitions
          </p>
        </div>
        <div className='card bg-soft-black'>
          <div className='box-wrapper grid grid-cols-2'>
            <BoxHeadline title='Total Prize Pool' value='$850,000' />
            <BoxHeadline title='Teams' value='44' />
          </div>
          <div className='box-second-wrapper grid grid-cols-3'>
            <BoxSecondHeadline title='Conference stage' value='JAN 16-20' />
            <BoxSecondHeadline title='Group Stage' value='JAN 21-24' />
            <BoxSecondHeadline title='Playoffs Stage' value='JAN 21-24' />
          </div>
        </div>
        <div className='flex items-center py-3'>
          <Link href='/#teams' className='m-auto text-secondary text-4xl transform animate-bounce'>
            <FontAwesomeIcon icon={faChevronDown}  />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Headline;