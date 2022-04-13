/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  useDisclosure,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import CardPlaylistCUI from '../playlist/CardPlaylistCUI';

const ModalSelectCUI = ({
  select, data, isOpen, onClose,
}) => {
  const finalRef = React.useRef();
  const playlist = useSelector((state) => state.Playlist.playlist);
  const [choseplaylist, setPlaylist] = useState([]);
  const listplaylist = playlist.map((v) => (
    <GridItem w="100%" key={v.id} mr="12">
      <CardPlaylistCUI data={v} />
      <input
        onChange={() => setPlaylist([v])}
        className="form-check-input mt-3 bg-black"
        type="radio"
        name="flexRadioDefault"
        id={`${v.id}id`}
      />
    </GridItem>

  ));
  return (
    <Modal size="full" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody p="10" />
        <Container maxW="container.xl" bg="white.400" color="#262626" pt="3">
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {listplaylist}
          </Grid>
        </Container>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            onClick={() => {
              select(data, choseplaylist);
            }}
            type="button"
            className={`btn btn-primary ${
              choseplaylist.length > 0 ? '' : 'disabled'
            }`}
            variant="ghost"
          >
            Save changes

          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalSelectCUI;
