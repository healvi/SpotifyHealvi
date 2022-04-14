import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';
import CardSelect from '../track/CardSelect';

const ModalPlaylistCUI = ({
  playlist, event, isOpen, onClose,
}) => {
  const listplaylist = playlist.map((v) => (
    <GridItem w="100%" mr="12" key={v.added_at}>
      <CardSelect data={v.track} display={false} />
    </GridItem>
  ));
  return (
    <Modal size="full" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Track In Playlist</ModalHeader>
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
