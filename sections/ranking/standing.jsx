import { useContext } from 'react';
import articleCtx from '@/context/article-ctx';
import RactangleTeamFlag from '@/components/ractangle-team-flag';

const Standing = () => {
  const { ranks } = useContext(articleCtx);
  const { global_ranks } = ranks;
  console.log(global_ranks);
  return (
    <section className='default-section'>
      <div className='page-container'>
        <div className='page-section-title mb-5'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>POWER RANKING GLOBAL</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>
            Season 5 - Season 6
          </p>
        </div>
        <div className='card bg-soft-black p-3'>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
            {
              global_ranks.map((rank, index) => {
                return (
                  <div className="flex flex-col items-center justify-center">
                    <RactangleTeamFlag key={index} name={rank?.name} flag={rank?.country} className="sm:w-[70%] w-full" />
                    <p className="text-white text-lg font-bold">TOP : {rank?.rank}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='note text-white mt-6'>
          <b>*Point System per Season: </b> <br/>

          CHAMPION: 8 Points <br/>
          TOP 2: 7 Points <br/>
          TOP 3: 6 Points <br/>
          TOP 4: 5 Points <br/>
          TOP 5: 4 Points <br/>
          TOP 6: 3 Points <br/>
          TOP 7: 2 Points <br/>
          TOP 8: 1 Point <br/>
        </div>
      </div>
    </section>
  );
};
export default Standing;