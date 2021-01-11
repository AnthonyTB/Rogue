import React, { useContext } from "react";
import "./Content.css";
import { Context } from "../Context/Context";

function Content() {
  const { twitchStream, twitchVod } = useContext(Context);
  const liveStatus = twitchStream.data.length > 0 ? true : false;

  const renderLiveStream = () => {
    return (
      <div className="Twitch-Container">
        <iframe
          title="Rogue's Live Stream"
          src={`https://player.twitch.tv/?channel=rogue&parent=rogue.vercel.app&parent=${process.env.REACT_APP_VERCEL_URL}&muted=true&autoplay=true`}
          allowFullScreen={true}
          frameBorder="0"
          scrolling="no"
          height="100%"
          width="100%"
        />
      </div>
    );
  };

  const renderPastBroadcast = () => {
    return (
      <div className="Twitch-Container">
        <iframe
          title="Rogue's Live Stream"
          src={`https://player.twitch.tv/?video=v${twitchVod.data[0].id}&parent=rogue.now.sh&parent=rogue.live&muted=true&autoplay=true`}
          allowFullScreen={true}
          frameBorder="0"
          scrolling="no"
          height="100%"
          width="100%"
        />
      </div>
    );
  };

  const renderYoutubeUploads = () => {
    return (
      <div className="Youtube-Container">
        <iframe
          title="Rogue's Youtube Uploads"
          width="100%"
          frameBorder="0"
          height="100%"
          src="https://www.youtube.com/embed/videoseries?list=UUo1ij-x1EG4hLXc_YY6snoQ"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    );
  };

  return (
    <>
      <section className="Twitch">
        <div className="Container-Right">
          {liveStatus ? <h3>Watch Me Live</h3> : <h3>Watch Last Stream</h3>}
          <hr className="underline" />
        </div>
        <div className="Container-Left">
          {liveStatus ? renderLiveStream() : renderPastBroadcast()}
        </div>
      </section>
      <section className="Youtube">
        <div className="Container-Left">
          <h3>Recent Upload</h3>
          <hr className="underline" />
        </div>
        <div className="Container-Right">{renderYoutubeUploads()}</div>
      </section>
    </>
  );
}

export default Content;
