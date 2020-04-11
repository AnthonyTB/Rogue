import React, { useContext, useEffect, useReducer, useCallback } from 'react';
import './About.css';
import { Context } from '../Context/Context';
import { Reducer } from '../interfaces/interfaces';

function About() {
  const { twitterData, twitchData, youtubeSubscribers } = useContext(Context);

  const Reducer = (prevState: any, { type, payload }: Reducer) => {
    switch (type) {
      case 'twitterCount':
        return {
          ...prevState,
          twitterCount: payload.twitterCount,
        };
      case 'twitchCount':
        return {
          ...prevState,
          twitchCount: payload.twitchCount,
        };
      case 'youtubeCount':
        return {
          ...prevState,
          youtubeCount: payload.youtubeCount,
        };
      default:
        return '';
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    twitterCount: 0,
    twitchCount: 0,
    youtubeCount: 0,
  });

  const dataSetter = (section: string, data: number) => {
    dispatch({
      type: `${section}`,
      payload: {
        [section]: data,
      },
    });
  };

  const incrementVals = useCallback(
    (source: string, sourceVal: number, maxVal: number): any => {
      const interval = setInterval(() => {
        if (sourceVal < maxVal) {
          sourceVal++;
          dataSetter(source, sourceVal);
        } else {
          clearInterval(interval);
          return sourceVal;
        }
      }, 0.0);
    },
    []
  );

  useEffect(() => {
    if (state.twitterCount === 0 && state.twitchCount === 0) {
      incrementVals(
        'twitterCount',
        state.twitterCount,
        twitterData.followers_count
      );

      incrementVals(
        'twitchCount',
        state.twitchCount,
        twitchData.data[0].view_count
      );

      incrementVals(
        'youtubeCount',
        state.youtubeCount,
        youtubeSubscribers.statistics.subscriberCount
      );
    }
  }, [
    incrementVals,
    state.twitchCount,
    state.twitterCount,
    state.youtubeCount,
    twitchData.data,
    twitterData.followers_count,
    youtubeSubscribers.statistics.subscriberCount,
  ]);

  return (
    <>
      <div className='Social-Media'>
        <ul>
          <li>
            <h5>@{twitterData.screen_name}</h5>
            <span className='Follower-Count'>{state.twitterCount}</span>
          </li>
          <li>
            <h5>/{twitchData.data[0].display_name}</h5>
            <span className='Views-Count'>{state.twitchCount}</span>
          </li>
          <li>
            <h5>/Rogue</h5>
            <span className='Subscriber-Count'>{state.youtubeCount}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
