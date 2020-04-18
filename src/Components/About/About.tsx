import React, { useContext, useEffect, useReducer, useCallback } from 'react';
import './About.css';
import { Context } from '../Context/Context';
import { Reducer } from '../interfaces/interfaces';

function About() {
  const {
    twitterData,
    twitchData,
    twitchFollowers,
    youtubeSubscribers,
    instagramStats,
  } = useContext(Context);

  const Reducer = (prevState: any, { type, payload }: Reducer) => {
    switch (type) {
      case 'twitterCount':
        return {
          ...prevState,
          twitterCount: payload.twitterCount,
        };
      // case 'twitchCount':
      //   return {
      //     ...prevState,
      //     twitchCount: payload.twitchCount,
      //   };
      case 'twitchFollowers':
        return {
          ...prevState,
          twitchFollowers: payload.twitchFollowers,
        };
      case 'youtubeCount':
        return {
          ...prevState,
          youtubeCount: payload.youtubeCount,
        };
      case 'instagramCount':
        return {
          ...prevState,
          instagramCount: payload.instagramCount,
        };
      default:
        return '';
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    twitterCount: 0,
    // twitchCount: 0,
    twitchFollowers: 0,
    youtubeCount: 0,
    instagramCount: 0,
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
        if (maxVal > 999999 && sourceVal < maxVal) {
          sourceVal += 631;
          dataSetter(source, sourceVal);
        } else if (maxVal > 99999 && sourceVal < maxVal) {
          sourceVal += 81;
          dataSetter(source, sourceVal);
        } else if (maxVal > 50000 && sourceVal < maxVal) {
          sourceVal += 41;
          dataSetter(source, sourceVal);
        } else if (maxVal > 9999 && sourceVal < maxVal) {
          sourceVal += 13;
          dataSetter(source, sourceVal);
        } else if (sourceVal < maxVal) {
          sourceVal += 3;
          dataSetter(source, sourceVal);
        } else {
          clearInterval(interval);
          return sourceVal;
        }
      }, 1);
    },
    []
  );

  useEffect(() => {
    if (
      state.twitterCount === 0 &&
      state.twitchFollowers === 0 &&
      state.youtubeCount === 0
    ) {
      incrementVals(
        'twitterCount',
        state.twitterCount,
        twitterData.followers_count
      );

      incrementVals(
        'twitchFollowers',
        state.twitchFollowers,
        twitchFollowers.total
      );

      incrementVals(
        'youtubeCount',
        state.youtubeCount,
        youtubeSubscribers.statistics.subscriberCount
      );

      incrementVals(
        'instagramCount',
        state.instagramCount,
        instagramStats.graphql.user.edge_followed_by.count
      );
    }
  }, [
    incrementVals,
    instagramStats.graphql.user.edge_followed_by.count,
    state.instagramCount,
    state.twitchFollowers,
    state.twitterCount,
    state.youtubeCount,
    twitchData.data,
    twitchFollowers.data.total,
    twitchFollowers.total,
    twitterData.followers_count,
    youtubeSubscribers.statistics.subscriberCount,
  ]);

  const insert = (arr: any, index: number, newItem: any) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index),
  ];

  const formatCount = (val: number) => {
    if (val.toString().length === 5) {
      let arr = val.toString().split('');
      return insert(arr, 2, '.').slice(0, 4).join('') + 'K';
    } else if (val.toString().length === 6) {
      let arr = val.toString().split('');
      return insert(arr, 3, '.').slice(0, 5).join('') + 'K';
    } else if (val.toString().length === 7) {
      let arr = val.toString().split('');
      return insert(arr, 1, '.').slice(0, 3).join('') + 'M';
    } else if (val.toString().length <= 4) {
      return val.toString().replace(/(.)(?=(\d{3})+$)/g, '$1,');
    }
  };

  return (
    <>
      <div className='Data'>
        <ul>
          <li className='Twitter'>
            <i className='fab fa-twitter'></i>
            <div className='group'>
              <h5>{twitterData.screen_name}</h5>
              <span className='Count'>{formatCount(state.twitterCount)}</span>
              <span className='description'>followers</span>
            </div>
            <button type='button'>
              <a href='https://twitter.com/TTrebb' target='blank_'>
                follow
              </a>
            </button>
          </li>
          <li className='Twitch'>
            <i className='fab fa-twitch'></i>
            <h5>{twitchData.data[0].display_name}</h5>
            <span className='Count'>{formatCount(state.twitchFollowers)}</span>
            <span className='description'>followers</span>
            <button type='button'>
              <a href='https://www.twitch.tv/rogue/' target='blank_'>
                subscribe
              </a>
            </button>
          </li>
          <li className='Youtube'>
            <i className='fab fa-youtube'></i>
            <h5>Rogueyy</h5>
            <span className='Count'>{formatCount(state.youtubeCount)}</span>
            <span className='description'>subscribers</span>
            <button type='button'>
              <a href='https://www.youtube.com/c/Rogueyy' target='blank_'>
                subscribe
              </a>
            </button>
          </li>
          <li className='Instagram'>
            <i className='fab fa-instagram'></i>
            <h5>TwitchRogue</h5>
            <span className='Count'>{formatCount(state.instagramCount)}</span>
            <span className='description'>followers</span>
            <button type='button'>
              <a href='https://www.instagram.com/twitchrogue/' target='blank_'>
                follow
              </a>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
