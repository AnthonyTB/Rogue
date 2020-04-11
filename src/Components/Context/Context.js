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
      case 'youtubeUpload':
        return {
          ...prevState,
          youtubeUpload: payload.youtubeUpload,
        };
      case 'apexStats':
        return {
          ...prevState,
          apexStats: payload.apexStats,
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
    youtubeUpload: null,
    apexStats: null,
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
    const fetchYoutubeUpload = async () => {
      const youtubeResponse2 = await Data.fetchYoutubeUpload();
      dataSetter('youtubeUpload', youtubeResponse2);
    };
    const fetchApex = async () => {
      const apexResponse = await Data.fetchApex();
      dataSetter('apexStats', apexResponse);
    };
    fetchTwitter();
    fetchTwitch();
    fetchTwitchStream();
    fetchYoutube();
    fetchYoutubeUpload();
    fetchApex();
  }, []);

  const value = {
    dispatch,
    twitterData: state.twitterData,
    twitchData: state.twitchData,
    twitchStream: state.twitchStream,
    youtubeSubscribers: state.youtubeSubscribers,
    youtubeUpload: state.youtubeUpload,
    apexStats: state.apexStats,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
