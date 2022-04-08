import resource from '../resource';
import resourceEmpty from '../resourceEmpty';

export const getPlaylistApi = () => resource.get('/me/playlists');

export const getTrackPlaylistApi = (url) => resourceEmpty.get(`${url}`);

export const postItemPlaylistApi = (id, uris) => resource.post(`/playlists/${id}/tracks?uris=${uris}`);

export const postNewPlaylistApi = (id, data) => resource.post(`https://api.spotify.com/v1/users/${id}/playlists`, data);
