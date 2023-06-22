import Head from 'next/head';
import { TwitchEmbed } from 'react-twitch-embed';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Live = () => {
  const channelName = 'BattleForSupremacy_TV';
  const [bearerToken, setBearerToken] = useState(null);
  const [channelInfo, setChannelInfo] = useState(null);
  const [isLive, setIsLive] = useState(false);
  const [latestVideo, setLatestVideo] = useState(null);

  const getOauthToken = async () => {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET,
      code: '/authorize',
    });
    setBearerToken(response.data.access_token);
  };

  // get channel info
  const getChannelInfo = async () => {
    const response = await axios.post(`https://api.twitch.tv/helix/users?login=${channelName}`,
      {
        headers: {
          'Client-ID': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
          Authorization: `Bearer ${bearerToken}`,
        },
      },
    );
    setChannelInfo(response.data.data[0]);
  };

  // get channel stream
  const getChannelStream = async () => {
    try {
      const response = await axios.get(`https://api.twitch.tv/helix/streams?user_login=${channelName}`,
        {
          headers: {
            'Client-ID': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
            'Client-Secret': process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET,
            Authorization: `Bearer ${bearerToken}`,
          },
        },
      );
      setIsLive(response.data.data.length > 0);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getLatestVideo = async () => {
    // https://api.twitch.tv/helix/videos?user_id=${userId}&first=1&sort=views
    const response = await axios.get(`https://api.twitch.tv/helix/videos?user_id=${channelInfo.id}&first=1&sort=views`, {
      headers: {
        'Client-ID': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    setLatestVideo(response.data.data[0]);
  };

  useEffect(() => {
    (async () => {
      await getOauthToken();
      await getChannelStream();
      // if (!isLive) {
      //   await getChannelInfo();
      //   await getLatestVideo();
      // }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>🔴LIVE TV | BattleForSupremacy Pro League</title>
      </Head>
      <section className='default-section'>
        <div className='px-2'>
          <div className=''>
            <div className='flex flex-col items-center justify-center min-h-[500px]'>
              {
                isLive ? (<TwitchEmbed
                  channel='BattleForSupremacy_TV'
                  id='BattleForSupremacy_TV'
                  theme='dark'
                  muted
                  width='100%'
                  height='700px'
                />) : (
                  // <TwitchEmbed
                  //   channel='BattleForSupremacy_TV'
                  //   id={latestVideo?.stream_id}
                  //   theme='dark'
                  //   muted
                  //   width='100%'
                  //   height='700px'
                  // />
                  <p>Coming Soon</p>
                )
              }
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
        </div>
      </section>
    </>
  );
};

export default Live;