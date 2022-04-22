import {
  postItemPlaylistApi,
  postNewPlaylistApi,
} from "../../api/res/PlaylistApi";
import { createPlaylistActionProps } from "../../interface/action";
import { deleteStorage } from "../../utils/storage";
import { clear } from "../Auth";
import { setSelectPlaylist } from "../Tracks";

const createPlaylistAction =
  ({
    data,
    me,
    select,
    playlist,
    setFromPlayList,
    setIsLoading,
  }: createPlaylistActionProps) =>
  async (dispatch: any) => {
    postNewPlaylistApi(me.id, data)
      .then(async (response) => {
        dispatch(setSelectPlaylist(response.data));
        await postItemPlaylistApi(response.data.id, select[0].uri)
          .then(() => {
            setFromPlayList({ title: "", description: "" });
            setIsLoading(false);
            alert(`Anda Berhasil Membuat Playlist ${playlist.title}`);
          })
          .catch((error) => {
            if (error.request.status === 401) {
              deleteStorage();
              dispatch(clear());
            }
          });
      })
      .catch((error) => {
        if (error.request.status === 401) {
          deleteStorage();
          dispatch(clear());
        }
      });
  };

export default createPlaylistAction;
