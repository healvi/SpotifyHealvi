import React from "react";
import {
  Box,
  Container,
  GridItem,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPlaylistApi } from "../../api/res/PlaylistApi";
import { setPlaylist } from "../../store/Playlist";
import ModalPlaylistCUI from "../../components/molecule/playlist/ModalPlaylistCUI";
import CardPlaylistCUI from "../../components/molecule/playlist/CardPlaylistCUI";
import { deleteStorage } from "../../utils/storage";
import { setAuth, setToken } from "../../store/Auth";
import { useNavigate } from "react-router-dom";

const PlaylistPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const datas = useAppSelector((state) => state.Playlist.playlist);
  const dispatch = useAppDispatch();
  const [modaldata, setModalData] = useState([]);
  const getPlaylist = async () => {
    await getPlaylistApi()
      .then((response) => {
        dispatch(setPlaylist(response.data.items));
      })
      .catch((error) => {
        if (error.request.status === 401) {
          deleteStorage();
          dispatch(setToken(""));
          dispatch(setAuth(false));
          navigate("/login");
        }
      });
  };
  const playlistCard =
    datas.length > 0 ? (
      datas.map((playlist) => (
        <GridItem w="100%" key={playlist.id}>
          <CardPlaylistCUI
            data={playlist}
            event={setModalData}
            onOpen={onOpen}
          />
        </GridItem>
      ))
    ) : (
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text fontSize="xl">Empty</Text>
      </Box>
    );
  useEffect(() => {
    getPlaylist();
  }, []);
  return (
    <div>
      <Container maxW="container.xl" bg="white.400" color="#262626" pt="3">
        <Text color={"white"} fontSize="4xl" _light={{ color: "black" }}>
          Your Playlist
        </Text>
        <Text color={"white"} fontSize="xs" _light={{ color: "black" }}>
          (Klik To SHow Track)
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {playlistCard}
        </SimpleGrid>
      </Container>
      <ModalPlaylistCUI
        playlist={modaldata}
        event={setModalData}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default PlaylistPage;
