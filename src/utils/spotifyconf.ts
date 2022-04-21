import generateRandomString from "./RandomString";

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const SCOPES = 'playlist-modify-public playlist-read-private playlist-modify-private';
const REDIRECT_URI : string | undefined  = process.env.REACT_APP_SPOTIFY_redirect_uri
const clientId : string | undefined  = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const state = generateRandomString(16);
const urlGet = `${AUTH_ENDPOINT}?client_id=${clientId}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}&state=${state}`;

export {
  AUTH_ENDPOINT, RESPONSE_TYPE, REDIRECT_URI, urlGet,
};
