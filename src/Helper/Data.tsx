const Data = {
  fetchTwitterFollows() {
    return fetch(
      `https://api.twitter.com/1.1/users/show.json?user_id=736007630`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  fetchYoutubeSubs() {
    return { test: 456 };
  },
  fetchTwitchData() {
    return { Live: 'Live' };
  },
  fetchApex() {
    return { test: 789 };
  },
};

export default Data;

// https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCo1ij-x1EG4hLXc_YY6snoQ%7D&key=AIzaSyCEuHdMDSi2ChxwUCUVQ4YBThh8-bWpsN4
