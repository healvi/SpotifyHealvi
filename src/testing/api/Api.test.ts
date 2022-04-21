import axios from "axios";
import {
  creatPlaylist,
  deleteItemToPlaylist,
  getArtist,
  getArtistAlbum,
  getMePlaylist,
  id,
  idartsit,
  idplaylist,
  postItemToPlaylist,
  query,
  track,
} from "../../mock/fakejson";

// get Track
it(`Get Track`, async () => {
  const data = await axios.get(
    `https://api.spotify.com/v1/search?q=${query}&type=track&market=ID&limit=1`
  );
  expect(data.data).toEqual(track);
});
// Get Me Playlist
it(`Get Playlist`, async () => {
  const data = await axios.get(
    `https://api.spotify.com/v1/me/playlists?limit=1`
  );
  expect(data.data).toEqual(getMePlaylist);
});
// Get artis
it(`Get artis`, async () => {
  const data = await axios.get(
    `https://api.spotify.com/v1/artists/${idartsit}`
  );
  expect(data.data).toEqual(getArtist);
});
// Get artis ALbum
it(`Get artis ALbum`, async () => {
  const data = await axios.get(
    `https://api.spotify.com/v1/artists/${idartsit}/albums`
  );
  expect(data.data).toEqual(getArtistAlbum);
});
// Get Post item playlist
it(`Get Post item playlist`, async () => {
  const data = await axios.post(
    `https://api.spotify.com/v1/playlists/${idplaylist}/tracks`
  );
  expect(data.data).toEqual(postItemToPlaylist);
});
// Get delete item playlist
it(`Get delete item playlist`, async () => {
  const data = await axios.delete(
    `https://api.spotify.com/v1/playlists/${idplaylist}/tracks`
  );
  expect(data.data).toEqual(deleteItemToPlaylist);
});
// create playlist
it(`create playlist`, async () => {
  const data = await axios.post(
    `https://api.spotify.com//v1/users/${id}/playlists`
  );
  expect(data.data).toEqual(creatPlaylist);
});
