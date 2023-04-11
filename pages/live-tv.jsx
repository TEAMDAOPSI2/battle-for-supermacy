import Head from 'next/head';
import { TwitchEmbed } from 'react-twitch-embed';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const LiveTv = () => {
  return (
    <>
      <Head>
        <title>🔴LIVE TV | BattleForSupremacy Pro League</title>
      </Head>
      <section className='default-section'>
        <div className='page-container'>
          <div className='page-section-title'>
            <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>How to watch</h2>
            <p className='text-[1.2rem] font-inter text-center text-accent uppercase'>Choose your preferred platform</p>
          </div>
          <div className='py-6'>
            <div className='flex flex-col items-center justify-center min-h-[400px]'>
              <TwitchEmbed
                channel='teamdaoTV'
                id='teamdaoTV'
                theme='dark'
                muted
                width='100%'
                height='400px'
                />
            </div>
            <div className="py-6">
              <p className='text-[1.2rem] font-inter text-left text-accent uppercase'>
                Livestream: <br/>
                <Link className="text-white hover:border-b" href={'https://www.facebook.com/TEAMDAOcom'} ><FontAwesomeIcon icon={faFacebook}/> Facebook T.E.A.M DAO</Link> <br/>
                Replay: <br/>
                <Link className="text-white hover:border-b" href={'https://www.youtube.com/@TEAMDAOlive'}><FontAwesomeIcon icon={faYoutube}/> Youtube T.E.A.M DAO</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveTv;