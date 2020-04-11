import React, { useContext } from 'react';
import './Content.css';
import { Context } from '../Context/Context';

function Content() {
  const { twitchStream, youtubeUpload } = useContext(Context);

  const renderLiveStream = () => {
    return (
      <iframe
        src={`https://player.twitch.tv/?channel=rogue&muted=true&autoplay=true`}
        allowFullScreen={true}
        frameBorder='0'
        scrolling='no'
      />
    );
  };

  const renderPastBroadcast = () => {
    return 'hi';
  };

  return (
    <>
      <section className='Twitch'>
        <h3>Watch Me Live</h3>
        <hr className='underline' />
        {twitchStream.data[0].type === 'lve'
          ? renderLiveStream()
          : renderPastBroadcast()}
      </section>
      <section className='YouTube'>
        <h3>Recent Upload</h3>
        <hr className='underline' />
      </section>
    </>
  );
}

export default Content;
