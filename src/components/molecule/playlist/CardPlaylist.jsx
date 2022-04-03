import React from "react";
import Img from "../../atoms/img";
import { Subtitle } from "../../atoms/text";
import { Title } from "../../atoms/text";

const CardPlaylist = ({ data }) => {
  return (
    <div className="col-md-4 col-12 ">
      <div className="card cardlist">
        <Img
          data={
            data.images.length !== 0
              ? data.images[0].url
              : "http://placeimg.com/640/640/tech"
          }
        />
        <div className="card-body">
          <Title data={data.name} />
          <Subtitle data={data.description} />
          <Subtitle data={data.id} />
        </div>
      </div>
    </div>
  );
};

export default CardPlaylist;
