import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';

const BoxHeadline = (props) => {
  const { title, value } = props;
  return (
    <div className='flex flex-col items-center font-inter py-4 gap-3 bg-soft-black my-3'>
      <span className='text-white text-base uppercase'>{title}</span>
      <h3 className='sm:text-3xl text-xl font-bold text-secondary'>{value}</h3>
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

const Headline = ({ data }) => {
  // const{ total_prize_pool, teams,league, tournament_schedule} = {
  //   total_prize_pool: '333,333,333',
  //   teams: [
  //     {
  //
  //     }
  //   ]
  // }

  return (
    <section className='home--headline default-section'>
      <div className='page-container'>
        <div className='mb-5 page-section-title'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center'>{data?.league}</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>
            {data?.tagline}
          </p>
        </div>
        <div className='card bg-soft-black'>
          <div className='box-wrapper grid grid-cols-2'>
            <BoxHeadline title='Total Prize Pool' value={data?.prizePool} />
            <BoxHeadline title='Players' value={data?.totalTeams} />
          </div>
          {/*<div className='box-second-wrapper grid sm:grid-cols-3 grid-cols-1'>*/}
          {/*  {*/}
          {/*    tournament_schedule.map((shcedule, index) => {*/}
          {/*      return (*/}
          {/*        <BoxSecondHeadline key={index} title={shcedule?.title} value={shcedule?.date} />*/}
          {/*      )*/}
          {/*    })*/}
          {/*  }*/}
          {/*</div>*/}
        </div>
        <div className='flex items-center py-3'>
          <Link href='/#teams' className='m-auto text-secondary text-4xl transform animate-bounce'>
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Headline;