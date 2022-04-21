import React from "react";
import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  GridItem,
  Heading,
  Text,
  Stack,
  Badge,
} from "@chakra-ui/react";

import { converToMinute } from "../../../utils/ConverToMinutes";
import { useNavigate } from "react-router-dom";
import { SongSelect } from "../../../interface/utils";
import ButtonSong from "./ButtonSong";

const CardSong = ({ data, isSelect, display, select }: SongSelect) => {
  const navigate = useNavigate();
  const { name, popularity, duration_ms, album } = data;
  const selecetedButton = isSelect ? (
    <ButtonSong
      isSelect={isSelect}
      name="Hapus Dari Selected"
      color="red"
      data={data}
      select={select}
    />
  ) : (
    <ButtonSong
      isSelect={isSelect!}
      name="SELECT"
      data={data}
      color="green"
      select={select}
    />
  );

  return (
    <GridItem w="100%" cursor={"pointer"} data-testid="cardsong">
      <Flex p={5} w={[300, 400]} alignItems="center" justifyContent="center">
        <Box
          maxW={"300px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            data-testid="cardimage"
            h={"120px"}
            w={"full"}
            src={
              album.images.length !== 0
                ? album.images[0].url
                : "http://placeimg.com/640/640/nature"
            }
            objectFit={"cover"}
          />

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading
                data-testid="cardtitle"
                color={"white"}
                fontSize={"lg"}
                fontWeight={500}
                _light={{ color: "black" }}
                fontFamily={"body"}
              >
                {name}
              </Heading>
              <Text color={"gray.500"} data-testid="cardartist">
                Artist:
                <span> </span>
                <Badge
                  onClick={() => navigate(`/artist/${album.artists[0].id}`)}
                  cursor={"pointer"}
                  variant="solid"
                  ml="1"
                  fontSize="0.8em"
                  colorScheme="green"
                >
                  {album.artists[0].name}{" "}
                </Badge>
              </Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text
                  data-testid="cardtime"
                  color={"white"}
                  _light={{ color: "black" }}
                  fontWeight={600}
                >
                  {converToMinute(duration_ms)}
                </Text>
                <Text
                  fontSize={"sm"}
                  _light={{ color: "black" }}
                  color={"gray.500"}
                >
                  Minutes
                </Text>
              </Stack>
              <Stack spacing={0} align={"center"}>
                <Text
                  color={"white"}
                  fontWeight={600}
                  _light={{ color: "black" }}
                >
                  {popularity}
                </Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  popularity
                </Text>
              </Stack>
            </Stack>

            {display ? selecetedButton : ""}
          </Box>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default CardSong;
