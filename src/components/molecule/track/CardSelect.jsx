import React from 'react';
import Img from '../../atoms/img';
import { Subtitle, Title } from '../../atoms/text';
import ButtonSelect from './ButtonSelect';

const CardSelect = ({
  data, isSelect, display = true, select, openModal,
}) => {
  const selectbutton = isSelect ? (
    <ButtonSelect
      isSelect={isSelect}
      name="Deselect"
      color="green"
      data={data}
      select={select}
      openModal={openModal}
    />
  ) : (
    <ButtonSelect name="Select" data={data} color="blue" openModal={openModal} />
  );
  return (
    <div className="card-track">
      <Img
        data={
            data.album.images.length !== 0
              ? data.album.images[0].url
              : 'http://placeimg.com/640/640/nature'
          }
      />
      <div className="card-body-track">
        <Title data={data.album.name} />
        <Subtitle data={data.artists[0].name} />
        {display ? selectbutton : ''}
      </div>
    </div>

  );
};

export default CardSelect;
