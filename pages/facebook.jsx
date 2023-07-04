import { FacebookProvider, EmbeddedVideo } from 'react-facebook';

function Facebook() {
  const videoURL = 'https://web.facebook.com/AingKingGaming/videos/1695219350899084/';
  return (
    <div className="text-white">
      <h1>Facebook</h1>
      <FacebookProvider appId="1031151104958662">
        <EmbeddedVideo video={videoURL}  href={videoURL} />
      </FacebookProvider>
    </div>
  );
}

export default Facebook;