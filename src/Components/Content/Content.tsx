import React, { useContext } from 'react';
import './Content.css';
import { Context } from '../Context/Context';

function Content() {
  const { twitchStream } = useContext(Context);
  const liveStatus = twitchStream.data.length > 0 ? true : false;

  const renderLiveStream = () => {
    return 'hi';
    return (
      <iframe
        title="Rogue's Live Stream"
        src={`https://player.twitch.tv/?channel=rogue&muted=true&autoplay=true`}
        allowFullScreen={true}
        frameBorder='0'
        scrolling='no'
      />
    );
  };

  const renderPastBroadcast = () => {
    return 'past broadcast';
  };

  const renderYoutubeUploads = () => {
    return (
      <div className='Youtube-Container'>
        <iframe
          title="Rogue's Youtube Uploads"
          width='100%'
          height='!00%'
          src='https://www.youtube.com/embed/NbMoTfCXRE0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      </div>
    );
  };

  return (
    <>
      <section className='Twitch'>
        <div className='Container-Right'>
          <h3>Watch Me Live</h3>
          <hr className='underline' />
        </div>
        <div className='Container-Left'>
          {liveStatus ? renderLiveStream() : renderPastBroadcast()}
        </div>
      </section>
      <section className='YouTube'>
        <h3>Recent Upload</h3>
        <hr className='underline' />
        {renderYoutubeUploads()}
      </section>
    </>
  );
}

export default Content;
