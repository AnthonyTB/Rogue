export default {
  TwitterToken: process.env.REACT_APP_TwitterToken,
  YoutubeToken: process.env.REACT_APP_YoutubeToken,
  TwitchToken: process.env.REACT_APP_TwitchToken,
  Proxy: 'https://cors-anywhere.herokuapp.com/',
  TwitterEndpoint:
    'https://api.twitter.com/1.1/users/show.json?user_id=736007630',
  ApexEndpoint:
    'https://public-api.tracker.gg/apex/v1/standard/profile/5/Rogurat',
  TwitchEndpoint: 'https://api.twitch.tv/helix/users?id=64581694',
  TwitchStreamEndpoint: 'https://api.twitch.tv/helix/streams?user_id=64581694',
  YoutubeSubsEndpoint:
    'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCo1ij-x1EG4hLXc_YY6snoQ%7D&key=',
  YoutubeUploadEndpoint: '',
};
