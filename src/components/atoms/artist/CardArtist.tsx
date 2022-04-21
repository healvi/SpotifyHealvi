import React from "react";
import { artist } from "../../../interface/Artist";
import "../../../containers/Artists/ArtisPage.scss";
type Props = {
  artist: artist;
};

const CardArtist = ({ artist }: Props) => {
  return (
    <div className="card-artist ">
      <img
        src={
          artist.images.length !== 0
            ? artist.images[0].url
            : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        }
        className="card-image-artist"
        alt="..."
      />
      <div className="card-body-artist">
        <h5 className="card-title">{artist.name}</h5>
        <div className="badge-conatiner">
          <span className="badge">Followers :{artist.followers.total}</span>
          <span className="badge">Popularity : {artist.popularity}</span>
        </div>
      </div>
    </div>
  );
};

export default CardArtist;
