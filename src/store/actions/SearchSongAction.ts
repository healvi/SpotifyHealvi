import { deleteItemPlaylistApi } from "../../api/res/PlaylistApi";
import { Track } from "../../interface/SearchData";
import { deleteStorage } from "../../utils/storage";
import { clear } from "../Auth";
import { setSelectSong, setSong } from "../Tracks";
import { Playlist } from "../../interface/PlaylistData";

export const combineDataAction =
  (datas: Track[], select: Track[]) => async (dispatch: any) => {
    const combine = datas.map((track) => ({
      ...track,
      isSelected: select.find((sele) => sele.uri === track.uri),
    }));
    dispatch(setSong(combine));
  };

export const handlesongaction =
  (select: Track[], track?: Track, playlist?: Playlist) =>
  async (dispatch: any) => {
    await deleteItemPlaylistApi(playlist!.id, track?.uri, playlist!.snapshot_id)
      .then(() => {
        alert(`Berhasil DELETE dari Playlist ${playlist!.name}`);
        dispatch(
          setSelectSong(select.filter((sele) => sele.uri !== track?.uri))
        );
      })
      .catch((error) => {
        if (error.request.status === 401) {
          deleteStorage();
          dispatch(clear());
        } else if (error.request.status === 404) {
          dispatch(
            setSelectSong(select.filter((sele) => sele.uri !== track?.uri))
          );
        }
      });
  };
