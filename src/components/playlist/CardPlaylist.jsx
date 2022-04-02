import React from "react";
import Img from "../img";
const CardPlaylist = ({ data, select, isSelect }) => {
  return (
    <div className="col-md-4 col-12">
      <div className="card">
        {/* <Img data={data} /> */}
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{data.description}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{data.id}</h6>
        </div>
      </div>
    </div>
  );
};

export default CardPlaylist;
