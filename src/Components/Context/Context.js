import React, { createContext, useEffect, useReducer } from 'react';
import Data from '../../Helper/Data';

export const Context = createContext();

export function ContextProvider(props) {
  const Reducer = (prevState, { type, payload }) => {
    switch (type) {
      case 'twitterData':
        return {
          ...prevState,
          twitterData: payload.twitterData,
        };
      case 'twitchData':
        return {
          ...prevState,
          twitchData: payload.twitchData,
        };
      case 'twitchStream':
        return {
          ...prevState,
          twitchStream: payload.twitchStream,
        };
      case 'youtubeSubscribers':
        return {
          ...prevState,
          youtubeSubscribers: payload.youtubeSubscribers,
        };

      case 'instagramStats':
        return {
          ...prevState,
          instagramStats: payload.instagramStats,
        };
      default:
        return '';
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    twitterData: null,
    twitchData: null,
    twitchStream: null,
    youtubeSubscribers: null,
    instagramStats: null,
  });

  const dataSetter = (section, data) => {
    dispatch({
      type: `${section}`,
      payload: {
        [section]: data,
      },
    });
  };

  useEffect(() => {
    const fetchTwitter = async () => {
      const twitterResponse = await Data.fetchTwitterData();
      dataSetter('twitterData', twitterResponse);
    };
    const fetchTwitch = async () => {
      const twitchResponse = await Data.fetchTwitchData();
      dataSetter('twitchData', twitchResponse);
    };
    const fetchTwitchStream = async () => {
      const twitchResponse = await Data.fetchTwitchStream();
      dataSetter('twitchStream', twitchResponse);
    };
    const fetchYoutube = async () => {
      const youtubeResponse = await Data.fetchYoutubeSubs();
      dataSetter('youtubeSubscribers', youtubeResponse);
    };
    const fetchInstagram = async () => {
      const instagramResponse = await Data.fetchInstagramData();
      dataSetter('instagramStats', instagramResponse);
    };
    fetchTwitter();
    fetchTwitch();
    fetchTwitchStream();
    fetchYoutube();
    fetchInstagram();
  }, []);

  const value = {
    dispatch,
    twitterData: state.twitterData,
    twitchData: state.twitchData,
    twitchStream: state.twitchStream,
    youtubeSubscribers: state.youtubeSubscribers,
    youtubeUpload: state.youtubeUpload,
    instagramStats: state.instagramStats,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
