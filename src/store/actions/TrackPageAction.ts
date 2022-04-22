import {
  deleteItemPlaylistApi,
  postItemPlaylistApi,
} from "../../api/res/PlaylistApi";
import SearchTrackApi from "../../api/res/SearchTrackApi";
import { Playlist } from "../../interface/PlaylistData";
import { Track } from "../../interface/SearchData";
import { deleteStorage } from "../../utils/storage";
import { clear } from "../Auth";
import { setSelectTrack, setTrack } from "../Tracks";

export const combineTrackAction =
  (datas: Track[], select: Track[]) => async (dispatch: any) => {
    const combine = datas.map((track) => ({
      ...track,
      isSelected: select.find((sele) => sele.uri === track.uri),
    }));
    dispatch(setTrack(combine));
  };

export const handleTrackgaction =
  (
    select: Track[],
    track?: Track,
    playlist?: Playlist[],
    onClose?: () => void
  ) =>
  async (dispatch: any) => {
    const selected = select.find((sele) => sele.uri === track?.uri);
    if (selected) {
      await deleteItemPlaylistApi(
        playlist![0].id,
        track?.uri,
        playlist![0].snapshot_id
      )
        .then(() => {
          alert(`Berhasil DELETE dari Playlist ${playlist![0].name}`);
          dispatch(
            setSelectTrack(select.filter((sele) => sele.uri !== track?.uri))
          );
        })
        .catch((error) => {
          if (error.request.status === 401) {
            deleteStorage();
            dispatch(clear());
          }
        });
    } else {
      await postItemPlaylistApi(playlist![0].id, track?.uri)
        .then(() => {
          alert(`Berhasil INSERT Ke Playlist ${playlist![0].name}`);
          dispatch(setSelectTrack([...select, track]));
          onClose!();
        })
        .catch((error) => {
          if (error.request.status === 401) {
            deleteStorage();
            dispatch(clear());
          }
        });
    }
  };

export const getDataAction =
  (query: string, select: Track[]) => async (dispatch: any) => {
    if (query !== "") {
      const params = {
        q: query,
        type: "track",
        limit: 10,
        market: "ID",
      };
      SearchTrackApi(params)
        .then((response) => {
          dispatch(combineTrackAction(response.data.tracks.items, select));
        })
        .catch((error) => {
          if (error.request.status === 401) {
            deleteStorage();
            dispatch(clear());
          }
        });
    }
  };
