import Head from 'next/head';
import { TwitchEmbed, TwitchPlayer } from 'react-twitch-embed';
import axios from 'axios';
import { useRef } from 'react';

export async function getServerSideProps() {
  // jingggxd
  const channelName = 'BattleForSupremacy_TV';
  let bearerTokenRef = null;

  // Fetch the OAuth token
  const getOauthToken = async () => {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET,
    });
    bearerTokenRef = response.data.access_token;
  };

  // Fetch the channel info
  const getChannelInfo = async () => {
    const response = await axios.get(`https://api.twitch.tv/helix/users?login=${channelName}`, {
      headers: {
        'Client-ID': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
        Authorization: `Bearer ${bearerTokenRef}`,
      },
    });
    return response.data.data[0];
  };

  // Fetch the channel stream
  const getChannelStream = async () => {
    const response = await axios.get(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
      headers: {
        'Client-ID': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
        Authorization: `Bearer ${bearerTokenRef}`,
      },
    });
    return response.data.data.length > 0;
  };

  // Fetch the latest video
  const getLatestVideo = async (channelID) => {
    const response = await axios.get(
      `https://api.twitch.tv/helix/videos?user_id=${channelID}&first=1&sort=views`,
      {
        headers: {
          'Client-ID': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
          Authorization: `Bearer ${bearerTokenRef}`,
        },
      },
    );
    return response.data.data[0];
  };

  await getOauthToken();
  const channelInfo = await getChannelInfo();
  const isLive = await getChannelStream();
  console.log(channelInfo, isLive);
  const latestVideo = await getLatestVideo(channelInfo?.id);

  return {
    props: {
      channelInfo,
      isLive,
      latestVideo,
    },
  };
};


const Live = ({ channelInfo, isLive, latestVideo }) => {
  return (
    <>
      <Head>
        <title>🔴LIVE TV | BattleForSupremacy Pro League</title>
      </Head>
      <section className='default-section'>
        <div className='px-2'>
          <div className=''>
            <div className='flex flex-col items-center justify-center min-h-[500px]'>
              {!isLive ? (
                <>
                  <TwitchPlayer
                    video={latestVideo?.id}
                    width='100%'
                    height='700px'
                    autoplay={true}
                  />
                </>
              ) : (
                <TwitchEmbed
                  channel={channelInfo?.login}
                  id={channelInfo?.id}
                  theme='dark'
                  width='100%'
                  height='700px'
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Live;
