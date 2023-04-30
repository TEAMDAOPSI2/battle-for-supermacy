import articleCtx from '@/context/article-ctx';
import RactangleTeamFlag from '@/components/ractangle-team-flag';
import { useContext } from 'react';

const StandingSolo = () => {
  const { ranks } = useContext(articleCtx);
  const { global_update } = ranks;
  return (
    <section className='default-section'>
      <div className='page-container'>
        <div className='page-section-title mb-5'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>POWER RANKING: TOP 24 ASSASSINS </h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter text-white'>
            UPDATE OF APRIL 29,2023
          </p>
        </div>
        <div className='card  p-3'>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
            {
              global_update.map((rank, index) => {
                return (
                  <div className="flex flex-row items-center gap-1" key={index}>
                    <div className={`flex flex-col items-center font-inter gap-6 relative w-[60px]`}>
                      <svg viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                        {/*stroke gradient*/}
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0070f3" />
                            <stop offset="100%" stopColor="#db2b42" />
                          </linearGradient>
                        </defs>

                        <polygon
                          className="relative h-[123px]"
                          stroke={'url(#gradient)'}
                          fill='transparent'
                          strokeWidth='1'
                          height="80px"
                          points='50 1 95 25 95 75 50 99 5 75 5 25' />
                      </svg>

                      <div className='absolute w-10/12 h-full flex flex-col justify-center items-center'>
                        <div className='flag w-full text-3xl font-flag text-center'>
                          {rank?.country}
                        </div>
                      </div>
                    </div>
                    <div className="text-white text-lg">
                      <span className="font-bold">TOP : {rank?.rank}</span>
                      <span className="block">{rank?.name}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default StandingSolo;