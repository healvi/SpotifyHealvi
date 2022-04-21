import React from "react";
import { Container, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { Track } from "../../interface/SearchData";
import { setSelectTrack, setTrack } from "../../store/Tracks";
import CardTrack from "../../components/molecule/track/CardTrack";
import ModalSelect from "../../components/molecule/track/ModalTrack";
import {
  deleteItemPlaylistApi,
  postItemPlaylistApi,
} from "../../api/res/PlaylistApi";
import { Playlist } from "../../interface/PlaylistData";
import { setAuth, setToken } from "../../store/Auth";
import { useNavigate } from "react-router-dom";
import SearchTrackApi from "../../api/res/SearchTrackApi";
import { deleteStorage } from "../../utils/storage";

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const query = useAppSelector((state) => state.Track.query);
  const tracks = useAppSelector((state) => state.Track.tracks);
  const select = useAppSelector((state) => state.Track.selectTrack);
  const modalData = useAppSelector((state) => state.Track.modalTrack);
  const combineData = (datas: Track[]) => {
    const combine = datas.map((track) => ({
      ...track,
      isSelected: select.find((sele) => sele.uri === track.uri),
    }));
    dispatch(setTrack(combine));
  };

  const handleSelect = async (track?: Track, playlist?: Playlist[]) => {
    const selected = select.find((sele) => sele.uri === track?.uri);
    if (selected) {
      await deleteItemPlaylistApi(
        playlist![0].id,
        track?.uri,
        playlist![0].snapshot_id
      )
        .then(() => {
          alert(`Berhasil DELETE dari Playlist ${playlist![0].name}`);
          dispatch(
            setSelectTrack(select.filter((sele) => sele.uri !== track?.uri))
          );
        })
        .catch((error) => {
          if (error.request.status === 401) {
            deleteStorage();
            dispatch(setToken(""));
            dispatch(setAuth(false));
            navigate("/login");
          }
        });
    } else {
      await postItemPlaylistApi(playlist![0].id, track?.uri)
        .then(() => {
          alert(`Berhasil INSERT Ke Playlist ${playlist![0].name}`);
          dispatch(setSelectTrack([...select, track]));
          onClose();
          getData();
        })
        .catch((error) => {
          if (error.request.status === 401) {
            deleteStorage();
            dispatch(setToken(""));
            dispatch(setAuth(false));
            navigate("/login");
          }
        });
    }
  };
  const getData = async () => {
    if (query !== "") {
      const params = {
        q: query,
        type: "track",
        limit: 10,
        market: "ID",
      };
      SearchTrackApi(params)
        .then((response) => {
          combineData(response.data.tracks.items);
        })
        .catch((error) => {
          if (error.request.status === 401) {
            deleteStorage();
            dispatch(setToken(""));
            dispatch(setAuth(false));
            navigate("/login");
          }
        });
    }
  };

  useEffect(() => {
    getData();
  }, [query, select]);
  const cardTrack = tracks.map((track) => {
    return select.length > 0 ? (
      <CardTrack
        key={track.id}
        data={track}
        isSelect={track.isSelected}
        display
        select={handleSelect}
        openModal={onOpen}
      />
    ) : (
      <CardTrack
        key={track.id}
        data={track}
        display
        select={handleSelect}
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

      <ModalSelect
        select={handleSelect}
        data={modalData}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};

export default SearchPage;
