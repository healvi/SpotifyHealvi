import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { Playlist } from "../../../interface/PlaylistData";
import { Track } from "../../../interface/SearchData";

type ModalTrack = {
  data: Track;
  select: (track?: Track, playlist?: Playlist[]) => void;
  onClose: () => void;
  isOpen: boolean;
};

function ModalTrack({ data, onClose, isOpen, select }: ModalTrack) {
  const playlist = useAppSelector((state) => state.Playlist.playlist);
  const [choseplaylist, setPlaylist] = useState<Playlist[]>([]);

  const listplaylist = playlist.map((value) => (
    <Radio
      key={value.id}
      colorScheme="blue"
      value={value.id}
      onChange={() => setPlaylist([value])}
    >
      {value.name}
    </Radio>
  ));
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Silahkan Pilih Playlist</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack>
            <RadioGroup>
              <Stack spacing={5} direction="column">
                {listplaylist}
              </Stack>
            </RadioGroup>
            ;
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            variant="ghost"
            bg={useColorModeValue("green", "green")}
            isDisabled={choseplaylist.length > 0 ? false : true}
            onClick={() => {
              select(data, choseplaylist);
              onClose();
            }}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalTrack;
