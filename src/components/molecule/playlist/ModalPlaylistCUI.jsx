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
import CardSelect from '../track/CardSelect';

const ModalPlaylistCUI = ({
  playlist, event, isOpen, onClose,
}) => {
  const listplaylist = playlist.map((v) => (
    <div className="col-md-4 text-center p-3" key={v.added_at}>
      <CardSelect data={v.track} display={false} />
    </div>
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
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              onClose();
              event([]);
            }}
          >
            Close
          </Button>

        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalPlaylistCUI;
