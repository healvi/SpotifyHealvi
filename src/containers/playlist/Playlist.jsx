import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardPlaylist from '../../components/molecule/playlist/CardPlaylist';
import ModalPlaylist from '../../components/molecule/playlist/ModalPlaylist';
import { setPlaylist } from '../../store/Playlist';
import { getPlaylistApi } from '../../utils/api/playlistApi';
import './Playlist.scss';

const Playlist = () => {
  const token = useSelector((state) => state.Auth.token);
  const datas = useSelector((state) => state.Playlist.playlist);
  const dispatch = useDispatch();
  const [modaldata, setModalData] = useState([]);

  const getPlaylist = async () => {
    try {
      const { data } = await getPlaylistApi();
      dispatch(setPlaylist(data.items));
    } catch (error) {
      console.log(error);
    }
  };
  const playlistCard = datas.length > 0 ? (
    datas.map((playlist) => (
      <CardPlaylist
        key={playlist.id}
        data={playlist}
        event={setModalData}
        token={token}
      />
    ))
  ) : (
    <div className="container d-flex justify-content-center align-content-center">
      <h1>Empty</h1>
    </div>
  );
  useEffect(() => {
    getPlaylist();
  }, [token]);
  return (

    <div>
      <div className="container-fluid p-3">
        <div className="row-playlist">
          {playlistCard}
        </div>
      </div>

      <ModalPlaylist playlist={modaldata} event={setModalData} />
    </div>

  );
};

export default Playlist;
