import React from "react";
import { AllAlbum } from "../../../interface/Album";

type Props = {
  album: AllAlbum;
};

const ListAlbum = ({ album }: Props) => {
  const list = album.items.map((v) => (
    <li key={v.id} className="list-item-album">
      <img
        src={
          v.images.length !== 0
            ? v.images[0].url
            : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        }
        className="img-album"
        alt="..."
      ></img>
      {v.name}
    </li>
  ));
  return (
    <div>
      <h3>List Album</h3>
      <ul className="list-album">{list}</ul>
    </div>
  );
};

export default ListAlbum;
