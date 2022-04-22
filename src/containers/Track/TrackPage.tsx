import React from "react";
import { Container, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { Track } from "../../interface/SearchData";
import CardTrack from "../../components/molecule/track/CardTrack";
import ModalTrack from "../../components/molecule/track/ModalTrack";
import { Playlist } from "../../interface/PlaylistData";
import { getDataAction } from "../../store/actions/TrackPageAction";
import { handleTrackgaction } from "../../store/actions/TrackPageAction";

const TrackPage = () => {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const query = useAppSelector((state) => state.Track.query);
  const tracks = useAppSelector((state) => state.Track.tracks);
  const select = useAppSelector((state) => state.Track.selectTrack);
  const modalData = useAppSelector((state) => state.Track.modalTrack);

  const handleTrack = async (track?: Track, playlist?: Playlist[]) => {
    dispatch(handleTrackgaction(select, track, playlist, onClose));
  };

  useEffect(() => {
    dispatch(getDataAction(query, select));
  }, [query, select]);
  const cardTrack = tracks.map((track) => {
    return select.length > 0 ? (
      <CardTrack
        key={track.id}
        data={track}
        isSelect={track.isSelected}
        display
        select={handleTrack}
        openModal={onOpen}
      />
    ) : (
      <CardTrack
        key={track.id}
        data={track}
        display
        select={handleTrack}
        openModal={onOpen}
      />
    );
  });
  return (
    <Container maxW="container.xl" bg="white.400" color="#262626" pt="3">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {/* Track */}
        {cardTrack}
        {/*End Track */}
      </SimpleGrid>

      <ModalTrack
        select={handleTrack}
        data={modalData}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};

export default TrackPage;
