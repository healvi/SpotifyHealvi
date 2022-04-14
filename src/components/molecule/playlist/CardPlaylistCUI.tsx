import React from 'react';
import { Flex, Box, useColorModeValue } from '@chakra-ui/react';
import { getTrackPlaylistApi } from '../../../utils/api/playlistApi';
import Img from '../../atoms/img';
import { playlistItem } from '../../../interface/PlaylistData';

const CardPlaylistCUI = ({ data, event, onOpen }: playlistItem) => {
  const requestItem = async () => {
    getTrackPlaylistApi(data.tracks.href).then((response) => {
      event(response.data.items);
    });
  };

  return (
    <Flex
      p={50}
      w="xs"
      className="cardlist"
      alignItems="center"
      justifyContent="center"
      data-bs-toggle="modal"
      data-bs-target="#modalplaylist"
      onClick={() => {
        onOpen();
        requestItem();
      }}
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Img
          data={
            data.images.length !== 0
              ? data.images[0].url
              : 'http://placeimg.com/640/640/tech'
          }
        />

        <Box p="6" pb="1">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" fontWeight="semibold" as="h4" lineHeight="tight">
              {data.name}
            </Box>
          </Flex>
        </Box>
        <Box p="6" pt="1">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xs"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.description}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default CardPlaylistCUI;
