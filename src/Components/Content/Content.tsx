import React, { useContext } from 'react';
import './Content.css';
import { Context } from '../Context/Context';
import { Animated } from 'react-animated-css';

function Content() {
  const { twitchStream, twitchVod } = useContext(Context);
  const liveStatus = twitchStream.data.length > 0 ? true : false;

  const renderLiveStream = () => {
    return (
      <div className='Twitch-Container'>
        <iframe
          title="Rogue's Live Stream"
          src={`https://player.twitch.tv/?channel=rogue&muted=true&autoplay=true`}
          allowFullScreen={true}
          frameBorder='0'
          scrolling='no'
          height='100%'
          width='100%'
        />
      </div>
    );
  };

  const renderPastBroadcast = () => {
    return (
      <div className='Twitch-Container'>
        <iframe
          title="Rogue's Live Stream"
          src={`https://player.twitch.tv/?video=v${twitchVod.data[0].id}&muted=true&autoplay=true`}
          allowFullScreen={true}
          frameBorder='0'
          scrolling='no'
          height='100%'
          width='100%'
        />
      </div>
    );
  };

  const renderYoutubeUploads = () => {
    return (
      <div className='Youtube-Container'>
        <iframe
          title="Rogue's Youtube Uploads"
          width='100%'
          frameBorder='0'
          height='100%'
          src='https://www.youtube.com/embed/NbMoTfCXRE0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      </div>
    );
  };

  return (
    <>
      <section className='Twitch'>
        <Animated
          animationIn='fadeInRight'
          animationOut='fadeOutRight'
          animationInDelay={1300}
          animationOutDelay={800}
          isVisible={true}
        >
          <div className='Container-Right'>
            {liveStatus ? <h3>Watch Me Live</h3> : <h3>Watch Last Stream</h3>}
            <hr className='underline' />
          </div>
        </Animated>
        <Animated
          animationIn='fadeIn'
          animationOut='fadeOut'
          animationInDelay={1300}
          animationOutDelay={800}
          isVisible={true}
        >
          <div className='Container-Left'>
            {liveStatus ? renderLiveStream() : renderPastBroadcast()}
          </div>
        </Animated>
      </section>
      <section className='Youtube'>
        <Animated
          animationIn='fadeInLeft'
          animationOut='fadeOutLeft'
          animationInDelay={1300}
          animationOutDelay={800}
          isVisible={true}
        >
          <div className='Container-Left'>
            <h3>Recent Upload</h3>
            <hr className='underline' />
          </div>
        </Animated>

        <Animated
          animationIn='fadeIn'
          animationOut='fadeOut'
          animationInDelay={1300}
          animationOutDelay={800}
          isVisible={true}
        >
          <div className='Container-Right'>{renderYoutubeUploads()}</div>
        </Animated>
      </section>
    </>
  );
}

export default Content;
