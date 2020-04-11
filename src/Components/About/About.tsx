import React, { useContext } from 'react';
import './About.css';
import { Context } from '../Context/Context';

function About() {
  const { twitterData, twitchData, youtubeSubscribers } = useContext(Context);

  const incrementVals = (val: number) => {
    let finalVal = 0;
    const interval = setInterval(() => {
      if (finalVal < val) {
        finalVal++;
      } else {
        clearInterval(interval);
        return finalVal;
      }
    }, 1000);
  };

  return (
    <>
      <div className='Social-Media'>
        <ul>
          <li>
            <h5>@{twitterData.screen_name}</h5>
            <span className='Follower-Count'>
              {incrementVals(twitterData.followers_count)}
            </span>
          </li>
          <li>
            <h5>/{twitchData.data[0].display_name}</h5>
            <span className='Views-Count'>{twitchData.data[0].view_count}</span>
          </li>
          <li>
            <h5>/Rogue</h5>
            <span className='Subscriber-Count'>
              {youtubeSubscribers.statistics.subscriberCount}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
