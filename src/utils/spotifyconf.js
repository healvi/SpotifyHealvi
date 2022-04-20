const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const REDIRECT_URI = 'https://kelasgigih.vercel.app';
const SCOPES = 'playlist-modify-public playlist-read-private playlist-modify-private';
// eslint-disable-next-line no-undef
const urlGet = `${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_redirect_uri}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}`;

export {
  AUTH_ENDPOINT, RESPONSE_TYPE, REDIRECT_URI, urlGet,
};
