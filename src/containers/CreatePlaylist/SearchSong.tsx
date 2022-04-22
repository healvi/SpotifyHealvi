import { Center, Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchTrackApi from "../../api/res/SearchTrackApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CardSong from "../../components/atoms/createPlaylist/CardSong";
import { Track } from "../../interface/SearchData";
import {
  combineDataAction,
  handlesongaction,
} from "../../store/actions/SearchSongAction";
import { setAuth, setToken } from "../../store/Auth";
import { setSelectSong } from "../../store/Tracks";
import { deleteStorage } from "../../utils/storage";

const SearchSong = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const query = useAppSelector((state) => state.Track.query);
  const song = useAppSelector((state) => state.Track.song);
  const select = useAppSelector((state) => state.Track.selectSong);
  const playlist = useAppSelector((state) => state.Track.selectPlaylist);

  const handleSong = async (track?: Track) => {
    const selected = select.find((sele) => sele.uri === track?.uri);
    if (selected) {
      dispatch(handlesongaction(select, track, playlist));
    } else {
      dispatch(setSelectSong([...select, track]));
    }
  };

  const getData = async () => {
    if (query !== "") {
      const params = {
        q: query,
        type: "track",
        limit: 1,
        market: "ID",
      };
      SearchTrackApi(params)
        .then((response) => {
          dispatch(combineDataAction(response.data.tracks.items, select));
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
  const cardSong = song.map((song) => {
    return select.length > 0 ? (
      <CardSong
        key={song.id}
        data={song}
        isSelect={song.isSelected}
        display
        select={handleSong}
      />
    ) : (
      <CardSong key={song.id} data={song} display select={handleSong} />
    );
  });
  return (
    <Stack minH={"100vh"} direction={{ base: "column", sm: "column" }}>
      <Flex flex={3} justify={"center"} minW="full">
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          justifyItems={"center"}
          minW="full"
        >
          {/* Song */}
          <Center alignItems={"center"}>{cardSong}</Center>
          {/*End Song */}
        </SimpleGrid>
      </Flex>
    </Stack>
  );
};

export default SearchSong;
