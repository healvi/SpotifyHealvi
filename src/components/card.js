import React from "react";
import Img from './img';
import Button from './button';
const Card = ({data, select}) => {
    return  <div className="col-md-3 col-12">
    <div className="card">
        <Img data={data}/>
      <div className="card-body">
        <h5 className="card-title">{data.album.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{data.name} by artist {data.artists[0].name}</h6>
       <Button select={select}/>
      </div>
  </div>
  </div>
}

export default Card;