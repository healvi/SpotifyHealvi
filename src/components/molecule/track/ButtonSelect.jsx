/* eslint-disable no-unused-vars */
import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalTrack } from '../../../store/Tracks';

const ButtonSelect = ({
  isSelect, name, color = 'primary', data, select, openModal,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  return isSelect ? (
    <Button
      mt="3"
      colorScheme={`${color}`}
      variant="solid"
      onClick={() => {
        openModal();
        select(data, []);
      }}
      type="button"

    >
      {name}
    </Button>
  ) : (
    <Button
      mt="3"
      colorScheme={`${color}`}
      variant="solid"
      onClick={() => {
        openModal();
        dispatch(setModalTrack(data));
      }}
      type="button"
      className="btn"
    >
      {name}
    </Button>
  );
};

export default ButtonSelect;
