import React from 'react';
import './About.css';
import Data from '../../Helper/Data';

function About() {
  const [twitterFollowers, setTwitterFollowers] = React.useState(null);
  const [youtubeSubscribers, setYoutubeSubscribers] = React.useState(null);
  const [twitchSubscribers, setTwitchSubscribers] = React.useState(null);
  const [apexStats, setApexStats] = React.useState(null);

  interface twitterResponseObject {
    followers: number;
  }

  interface twitchResponseObject {
    followers: number;
  }

  interface youtubeResponseObject {
    followers: number;
  }

  interface apexResponseObject {
    followers: number;
  }

  React.useEffect(() => {
    const fetchTwitter = async () => {
      const twitterResponse: twitterResponseObject = await Data.fetchTwitterFollows();
      setTwitterFollowers(twitterResponse);
    };
    const fetchTwitch = async () => {
      const twitchResponse: twitchResponseObject = await Data.fetchTwitchSubs();
      setTwitchSubscribers(twitchResponse);
    };
    const fetchYoutube = async () => {
      const youtubeResponse: youtubeResponseObject = await Data.fetchYoutubeSubs();
      setYoutubeSubscribers(youtubeResponse);
    };
    const fetchApex = async () => {
      const apexResponse: apexResponseObject = await Data.fetchApex();
      setApexStats(apexResponse);
    };
    fetchTwitter();
    fetchTwitch();
    fetchYoutube();
    fetchApex();
  }, []);

  return <></>;
}

export default About;
