import resource from '../resource';
import resourceEmpty from '../resourceEmpty';
import { postPlaylist } from '../../interface/spotifyInterface';
import axios from 'axios';

export const getPlaylistApi = () => resource.get('/me/playlists');

export const getTrackPlaylistApi = (url : string) => resourceEmpty.get(`${url}`);

export const postNewPlaylistApi = (id : string, data : postPlaylist ) => resource.post(`https://api.spotify.com/v1/users/${id}/playlists`, data);
export const postItemPlaylistApi = (id : string, uris? : string) => resource.post(`/playlists/${id}/tracks?uris=${uris}`);


export const deleteItemPlaylistApi = (id : string, uris? : string,snapshot? : string) => {
    const token = window.localStorage.getItem('token');
    const headers = {
        'Authorization': `Bearer ${token}`
      }
      const data = {
        "tracks": [{ "uri": uris}]
     
      }
      
     return axios.delete(`https://api.spotify.com/v1/playlists/${id}/tracks`, {headers, data})
}
