import {
  Box,
  Center,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  postItemPlaylistApi,
  postNewPlaylistApi,
} from "../../api/res/PlaylistApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PlaylistForm from "../../components/molecule/forms/PlaylistForm";
import { formPlaylistPost } from "../../interface/utils";
import { setAuth, setToken } from "../../store/Auth";
import { setSelectPlaylist, setSelectSong } from "../../store/Tracks";
import { deleteStorage } from "../../utils/storage";
import SearchSong from "./SearchSong";

const CreatePlaylist = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.Auth.token);
  const me = useAppSelector((state) => state.User.user);
  const select = useAppSelector((state) => state.Track.selectSong);
  const [isLoding, setIsLoading] = useState(false);
  const [playlist, setFromPlayList] = useState<formPlaylistPost>({
    title: "",
    description: "",
  });
  const handleForm = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFromPlayList({ ...playlist, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("berhasil");
    if (token) {
      const data = {
        name: playlist.title,
        description: playlist.description,
        public: true,
      };
      try {
        postNewPlaylistApi(me.id, data)
          .then(async (response) => {
            dispatch(setSelectPlaylist(response.data));
            await postItemPlaylistApi(response.data.id, select[0].uri)
              .then(() => {
                setFromPlayList({ title: "", description: "" });
                setIsLoading(false);
                alert(`Anda Berhasil Membuat Playlist ${playlist.title}`);
              })
              .catch((error) => {
                if (error.request.status === 401) {
                  deleteStorage();
                  dispatch(setToken(""));
                  dispatch(setAuth(false));
                  navigate("/login");
                }
              });
          })
          .catch((error) => {
            if (error.request.status === 401) {
              deleteStorage();
              dispatch(setToken(""));
              dispatch(setAuth(false));
              navigate("/login");
            }
          });
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", sm: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={2} w={"full"} maxW={"md"}>
          {/* card */}
          <Center py={2}>
            <Box
              borderColor={"pink.400"}
              borderWidth="1px"
              borderRadius="lg"
              w={"full"}
              bg={useColorModeValue("white", "white.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Text size="150px" _light={{ color: "black" }}>
                Create Your Playlist
              </Text>
              <PlaylistForm
                valueForm={playlist}
                handleSubmit={handleSubmit}
                handleForm={handleForm}
                isLoading={isLoding}
              />
            </Box>
          </Center>
          {/* Endcard */}
        </Stack>
      </Flex>
      <Flex flex={2} minW={"100w"}>
        <SearchSong />
      </Flex>
    </Stack>
  );
};

export default CreatePlaylist;
