import React, { createContext, useEffect, useReducer } from 'react';
import Data from '../../Helper/Data';

export const Context = createContext();

export function ContextProvider(props) {
  const Reducer = (prevState, { type, payload }) => {
    switch (type) {
      case 'twitterFollowers':
        return {
          ...prevState,
          twitterFollowers: payload.twitterFollowers,
        };
      case 'twitchData':
        return {
          ...prevState,
          twitchData: payload.twitchData,
        };
      case 'youtubeSubscribers':
        return {
          ...prevState,
          youtubeSubscribers: payload.youtubeSubscribers,
        };
      case 'apexStats':
        return {
          ...prevState,
          apexStats: payload.apexStats,
        };
      default:
        return 'hi';
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    twitterFollowers: null,
    twitchData: null,
    youtubeSubscribers: null,
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
      const twitterResponse = await Data.fetchTwitterFollows();
      dataSetter('twitterFollowers', twitterResponse);
    };
    const fetchTwitch = async () => {
      const twitchResponse = await Data.fetchTwitchData();
      dataSetter('twitchData', twitchResponse);
    };
    const fetchYoutube = async () => {
      const youtubeResponse = await Data.fetchYoutubeSubs();
      dataSetter('youtubeSubscribers', youtubeResponse);
    };
    const fetchApex = async () => {
      const apexResponse = await Data.fetchApex();
      dataSetter('apexStats', apexResponse);
    };
    fetchTwitter();
    fetchTwitch();
    fetchYoutube();
    fetchApex();
  }, []);

  const value = {
    dispatch,
    twitterFollowers: state.twitterFollowers,
    twitchData: state.twitchData,
    youtubeSubscribers: state.youtubeSubscribers,
    apexStats: state.apexStats,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
