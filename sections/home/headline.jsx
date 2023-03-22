import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';

const BoxHeadline = (props) => {
  const { title, value } = props;
  return (
    <div className='flex flex-col items-center font-inter py-4 gap-3 bg-soft-black my-3'>
      <span className='text-white sm:text-lg text-base uppercase text-xl'>{title}</span>
      <h3 className='sm:text-[2.5rem] text-xl font-bold text-secondary'>{value}</h3>
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
  const article = useContext(articleCtx)
  const{ total_prize_pool, teams,league, tournament_schedule} = article

  return (
    <section className='home--headline default-section'>
      <div className='page-container'>
        <div className='mb-5 page-section-title'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>{league}</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>
            A gateway to the top for all BFS Pro Tour Competitions
          </p>
        </div>
        <div className='card bg-soft-black'>
          <div className='box-wrapper grid grid-cols-2'>
            <BoxHeadline title='Total Prize Pool' value={total_prize_pool} />
            <BoxHeadline title='Teams' value={teams?.length} />
          </div>
          <div className='box-second-wrapper grid sm:grid-cols-3 grid-cols-1'>
            {
              tournament_schedule.map((shcedule, index) => {
                return (
                  <BoxSecondHeadline key={index} title={shcedule?.title} value={shcedule?.date} />
                )
              })
            }
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