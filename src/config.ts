export default {
  TwitterToken: process.env.REACT_APP_TwitterToken,
  YoutubeToken: process.env.REACT_APP_YoutubeToken,
  TwitchToken: process.env.REACT_APP_TwitchToken,
  Proxy: 'https://radiant-chamber-62870.herokuapp.com/',
  TwitterEndpoint:
    'https://api.twitter.com/1.1/users/show.json?user_id=736007630',
  InstagramEndpoint: 'https://www.instagram.com/twitchrogue/?__a=1',
  TwitchEndpoint: 'https://api.twitch.tv/helix/users?id=64581694',
  TwitchStreamEndpoint: 'https://api.twitch.tv/helix/streams?user_id=64581694',
  TwitchVodEndpoint: 'https://api.twitch.tv/helix/videos?user_id=64581694',
  TwitchFollowersEndpoint:
    'https://api.twitch.tv/helix/users/follows?to_id=64581694',
  YoutubeSubsEndpoint:
    'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCo1ij-x1EG4hLXc_YY6snoQ%7D&key=',
};
