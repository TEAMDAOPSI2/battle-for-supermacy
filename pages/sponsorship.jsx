import Head from 'next/head';
import { TwitchEmbed } from 'react-twitch-embed';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Live = () => {
  return (
    <>
      <Head>
        <title>SPONSORSHIP | BattleForSupremacy Pro League</title>
      </Head>
      <section className='default-section'>
        <div className='px-2'>
          <div className=''>
            <div className='flex flex-col items-center justify-center h-[650px] py-4'>
            {/* video */}
              <video className='w-full' autoPlay loop>
                <source src='/videos/mountain-dew.mp4' type='video/mp4' />
              </video>

            </div>
            {/*<div className="py-6">*/}
            {/*  <p className='text-[1.2rem] font-inter text-left text-accent uppercase'>*/}
            {/*    Livestream: <br/>*/}
            {/*    <Link className="text-white hover:border-b" href={'https://www.facebook.com/TEAMDAOcom'} ><FontAwesomeIcon icon={faFacebook}/> Facebook T.E.A.M DAO</Link> <br/>*/}
            {/*    Replay: <br/>*/}
            {/*    <Link className="text-white hover:border-b" href={'https://www.youtube.com/@TEAMDAOlive'}><FontAwesomeIcon icon={faYoutube}/> Youtube T.E.A.M DAO</Link>*/}
            {/*  </p>*/}
            {/*</div>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Live;