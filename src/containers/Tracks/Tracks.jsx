import {
  React, useState, useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Track.scss';
import {
  Box, Container, Grid, GridItem, Text, useDisclosure,
} from '@chakra-ui/react';
import CardSelect from '../../components/molecule/track/CardSelect';
import Input from '../../components/atoms/input';
import { setPlaylist } from '../../store/Playlist';
import { setSelectTrack, setTrack } from '../../store/Tracks';
import { getPlaylistApi, postItemPlaylistApi } from '../../utils/api/playlistApi';
import searchTrackApi from '../../utils/api/searchTrackApi';
import { urlGet } from '../../utils/spotifyconf';
import ModalSelectCUI from '../../components/molecule/track/ModalSelectCUI';

const Tracks = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = useSelector((state) => state.Auth.token);
  const data = useSelector((state) => state.Track.tracks);
  const modalData = useSelector((state) => state.Track.modalTrack);
  const select = useSelector((state) => state.Track.selectTrack);
  const [query, setQuery] = useState('');

  const combineData = (datas) => {
    const combine = datas.map((track) => ({
      ...track,
      isSelected: select.find((sele) => sele.uri === track.uri),
    }));
    dispatch(setTrack(combine));
  };
  const getData = async () => {
    if (query !== '') {
      const params = {
        q: query,
        type: 'track',
        limit: 10,
        market: 'ID',
      };
      searchTrackApi(params).then((response) => {
        combineData(response.data.tracks.items);
      });
    }
  };

  const getPlaylist = async () => {
    try {
      const { data } = await getPlaylistApi();
      dispatch(setPlaylist(data.items));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = async (track, playlist) => {
    const selected = select.find((sele) => sele.uri === track.uri);
    if (selected) {
      dispatch(setSelectTrack(select.filter((sele) => sele.uri !== track.uri)));
    } else {
      try {
        await postItemPlaylistApi(playlist[0].id, track.uri).then(() => {
          alert(`Berhasil insert Ke Playlist ${playlist[0].name}`);
          dispatch(setSelectTrack([...select, track]));
        });
        onClose();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData();
    getPlaylist();
  }, [query, select, token]);

  const searchData = token ? (
    <div className="">
      <Input get={setQuery} />
    </div>
  ) : (
    <a href={urlGet} className="btn btn-danger">
      Anda Belum Login
    </a>
  );

  const getTrack = data.length > 0 ? (
    data.map((track) => {
      if (select.length > 0) {
        return (
          <CardSelect
            key={track.id}
            data={track}
            isSelect={track.isSelected}
            display
            select={handleSelect}
            openModal={onOpen}
          />
        );
      }
      return (
        <GridItem w="100%" key={track.id}>
          <CardSelect
            data={track}
            display
            select={handleSelect}
            openModal={onOpen}
          />
        </GridItem>
      );
    })
  ) : (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Text fontSize="xl">Empty</Text>
    </Box>

  );

  return (
    <div>
      <Container maxW="container.xl" bg="white.400" color="#262626" pt="3">
        <Grid templateColumns="repeat(2)" gap={6}>
          <div className="">{searchData}</div>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {getTrack}
          </Grid>

        </Grid>
      </Container>
      <ModalSelectCUI select={handleSelect} data={modalData} isOpen={isOpen} onClose={onClose} />
    </div>

  );
};

export default Tracks;
