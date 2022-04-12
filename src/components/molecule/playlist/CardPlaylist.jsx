import React from 'react';
import Img from '../../atoms/img';
import { Subtitle, Title } from '../../atoms/text';
import { getTrackPlaylistApi } from '../../../utils/api/playlistApi';

const CardPlaylist = ({ data, event }) => {
  const requestItem = async () => {
    getTrackPlaylistApi(data.tracks.href).then((response) => {
      event(response.data.items);
    });
  };
  return (

    <div
      className="card-playlist cardlist"
      data-bs-toggle="modal"
      data-bs-target="#modalplaylist"
      onClick={() => requestItem()}
      aria-hidden
    >
      <Img
        data={
            data.images.length !== 0
              ? data.images[0].url
              : 'http://placeimg.com/640/640/tech'
          }
      />
      <div className="card-body-playlist">
        <Title data={data.name} />
        <Subtitle data={data.description} />
        <Subtitle data={data.id} />
      </div>
    </div>

  );
};

export default CardPlaylist;
