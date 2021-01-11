import React, { useContext, useEffect, useReducer, useCallback } from 'react';
import './About.css';
import { Context } from '../Context/Context';
import { ISocialCard, IReducer } from '../../interfaces';
import SocialCard from './SocialCard';

function About() {
  const {
    twitterData,
    twitchFollowers,
    youtubeSubscribers,
    // instagramStats,
  } = useContext(Context);

  const Reducer = (prevState: any, { type, payload }: IReducer) => {
    switch (type) {
      case 'twitterCount':
        return {
          ...prevState,
          twitterCount: payload.twitterCount,
        };
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
      // case 'instagramCount':
      //   return {
      //     ...prevState,
      //     instagramCount: payload.instagramCount,
      //   };
      default:
        return '';
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    twitterCount: 0,
    twitchFollowers: 0,
    youtubeCount: 0,
    // instagramCount: 0,
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

      // incrementVals(
      //   'instagramCount',
      //   state.instagramCount,
      //   instagramStats.graphql.user.edge_followed_by.count
      // );
    }
  }, [
    incrementVals,
    // instagramStats.graphql.user.edge_followed_by.count,
    // state.instagramCount,
    state.twitchFollowers,
    state.twitterCount,
    state.youtubeCount,
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

  const CardList: ISocialCard[] = [
    {
      Title: "Twitter",
      Link: 'https://twitter.com/TTrebb',
      IconClassname: 'fab fa-twitter',
      Username: twitterData.screen_name,
      Count: formatCount(state.twitterCount),
      SubLabel: 'followers',
      ButtonLabel: 'follow'
    },
    {
      Title: "Twitch",
      Link: 'https://www.twitch.tv/rogue/',
      IconClassname: 'fab fa-twitch',
      Username: 'Rogue',
      Count: formatCount(state.twitchFollowers),
      SubLabel: 'followers',
      ButtonLabel: 'subscribe'
    },
    {
      Title: "Youtube",
      Link: 'https://www.youtube.com/c/Rogueyy',
      IconClassname: 'fab fa-youtube',
      Username: 'Rogueyy',
      Count: formatCount(state.youtubeCount),
      SubLabel: 'subscribers',
      ButtonLabel: 'subscribe'
    }
  ]

  return (
    <>
      <div className='Data'>
        <ul>
          {CardList.map((Card: ISocialCard) => <SocialCard {...Card} />)}
        </ul>
      </div>
    </>
  );
}

export default About;
