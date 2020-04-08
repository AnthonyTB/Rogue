import React from 'react';
import './Hero.css';
import Data from '../../Helper/Data';

function Hero() {
  const [twitterFollowers, setTwitterFollowers] = React.useState(null);
  const [youtubeSubscribers, setYoutubeSubscribers] = React.useState(null);
  const [twitchSubscribers, setTwitchSubscribers] = React.useState(null);
  const [apexStats, setApexStats] = React.useState(null);

  React.useEffect(() => {
    Data.fetchTwitterFollows().then(response => setTwitterFollowers(response));
    Data.fetchYoutubeSubs().then(response => setYoutubeSubscribers(response));
    Data.fetchTwitchSubs().then(response => setTwitchSubscribers(response));
    Data.fetchApex().then(response => setApexStats(response));
  }, []);

  return (
    <>
      <h1>Hero</h1>
    </>
  );
}

export default Hero;
