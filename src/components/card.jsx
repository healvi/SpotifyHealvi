import React from "react";
import Img from "./img";
import Button from "./button";
import { Title, Subtitle } from "./text";
const Card = ({ allSelect, data, select, isSelect, dataUpdate, allData }) => {
  const selectbutton = isSelect ? (
    <Button
      select={select}
      name="Deselect"
      color="success"
      data={data}
      allData={allData}
      allSelect={allSelect}
      isSelect={isSelect}
      dataUpdates={dataUpdate}
    />
  ) : (
    <Button
      select={select}
      name="Select"
      data={data}
      allData={allData}
      allSelect={allSelect}
      isSelect={isSelect}
      dataUpdates={dataUpdate}
    />
  );
  return (
    <div className="col-md-4 col-12">
      <div className="card">
        <Img data={data} />
        <div className="card-body">
          <Title data={data} />
          <Subtitle data={data} />
          {selectbutton}
        </div>
      </div>
    </div>
  );
};

export default Card;
