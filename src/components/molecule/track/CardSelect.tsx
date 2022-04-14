import React from 'react';
import Img from '../../atoms/img';
import { Subtitle, Title } from '../../atoms/text';
import ButtonSelect from './ButtonSelect';
import { TrackSelect } from '../../../interface/TrackData';
const CardSelect = (trackSelect: TrackSelect) => {
  const selectbutton = trackSelect.isSelect ? (
    <ButtonSelect
      isSelect={trackSelect.isSelect}
      name="Deselect"
      color="green"
      data={trackSelect.data}
      select={trackSelect.select}
      openModal={trackSelect.openModal}
    />
  ) : (
    <ButtonSelect
      isSelect={trackSelect.isSelect!}
      name="Select"
      data={trackSelect.data}
      color="blue"
      select={trackSelect.select}
      openModal={trackSelect.openModal}
    />
  );
  return (
    <div className="card-track">
      <Img
        data={
          trackSelect.data.album.images.length !== 0
            ? trackSelect.data.album.images[0].url
            : 'http://placeimg.com/640/640/nature'
        }
      />
      <div className="card-body-track">
        <Title data={trackSelect.data.album.name} />
        <Subtitle data={trackSelect.data.artists[0].name} />
        {trackSelect.display ? selectbutton : ''}
      </div>
    </div>
  );
};

export default CardSelect;
