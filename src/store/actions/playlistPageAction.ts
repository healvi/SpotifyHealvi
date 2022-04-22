import { getPlaylistApi, getTrackPlaylistApi } from "../../api/res/PlaylistApi";
import { deleteStorage } from "../../utils/storage";
import { clear } from "../Auth";
import { setPlaylist } from "../Playlist";
import { Playlist } from "../../interface/PlaylistData";

export const playlistPageAction = () => async (dispatch: any) => {
  await getPlaylistApi()
    .then((response) => {
      dispatch(setPlaylist(response.data.items));
    })
    .catch((error) => {
      if (error.request.status === 401) {
        deleteStorage();
        dispatch(clear());
      }
    });
};

export const requestItemPlaylistAction =
  (data: Playlist, event: (data: any) => void) => async (dispatch: any) => {
    getTrackPlaylistApi(data.tracks.href)
      .then((response) => {
        event(response.data.items);
      })
      .catch((error) => {
        if (error.request.status === 401) {
          deleteStorage();
          dispatch(clear());
        }
      });
  };
