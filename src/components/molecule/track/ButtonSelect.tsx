import React from 'react';
import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '../../../app/hooks';
import { setModalTrack } from '../../../store/Tracks';
import { buttonSelect } from '../../../interface/TrackData';

const ButtonSelect = (buttonSelect: buttonSelect) => {
  const dispatch = useAppDispatch();
  return buttonSelect.isSelect ? (
    <Button
      mt="3"
      colorScheme={`${buttonSelect.color}`}
      variant="solid"
      onClick={() => {
        buttonSelect.openModal();
        buttonSelect.select(buttonSelect.data, []);
      }}
      type="button"
    >
      {buttonSelect.name}
    </Button>
  ) : (
    <Button
      mt="3"
      colorScheme={`${buttonSelect.color}`}
      variant="solid"
      onClick={() => {
        buttonSelect.openModal();
        dispatch(setModalTrack(buttonSelect.data));
      }}
      type="button"
      className="btn"
    >
      {buttonSelect.name}
    </Button>
  );
};

export default ButtonSelect;
