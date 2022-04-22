import React, { useEffect } from "react";
import Routes from "./routes/routes";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { deleteStorage } from "./utils/storage";
import { clear } from "./store/Auth";
import { setUser } from "./store/User";
import { Box } from "@chakra-ui/react";
import { getPlaylistApi } from "./api/res/PlaylistApi";
import { setPlaylist } from "./store/Playlist";
import { UserApi } from "./api/res/UserApi";
import { authGenerate } from "./api/OAuth";

export const App = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.Auth.isAuth);
  const StartApplikasi = async () => {
    await UserApi()
      .then(async (response) => {
        dispatch(setUser(response.data));
        const { data } = await getPlaylistApi();
        dispatch(setPlaylist(data.items));
      })
      .catch((error) => {
        if (error.request.status === 401) {
          deleteStorage();
          dispatch(clear());
        }
      });
  };

  useEffect(() => {
    dispatch(authGenerate());
    StartApplikasi();
  }, [dispatch]);

  return (
    <Box maxW="full">
      <Routes />
    </Box>
  );
};
