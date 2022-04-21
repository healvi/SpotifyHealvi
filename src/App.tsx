import React, { useEffect } from "react";
import Routes from "./routes/routes";
import { useAppDispatch } from "./app/hooks";
import { deleteStorage } from "./utils/storage";
import { setAuth, setToken } from "./store/Auth";
import { setUser } from "./store/User";
import { Box } from "@chakra-ui/react";
import { setTokena } from "./api/StartApp";
import { getPlaylistApi } from "./api/res/PlaylistApi";
import { setPlaylist } from "./store/Playlist";
import { UserApi } from "./api/res/UserApi";

export const App = () => {
  const dispatch = useAppDispatch();
  const StartApplikasi = async () => {
    const token = setTokena();
    dispatch(setToken(token));
    dispatch(setAuth(true));
    await UserApi()
      .then(async (response) => {
        dispatch(setUser(response.data));
        const { data } = await getPlaylistApi();
        dispatch(setPlaylist(data.items));
      })
      .catch((error) => {
        if (error.request.status === 401) {
          deleteStorage();
          dispatch(setToken(""));
          dispatch(setAuth(false));
          window.location.reload;
        }
      });
  };

  useEffect(() => {
    StartApplikasi();
  }, []);

  return (
    <Box maxW="full">
      <Routes />
    </Box>
  );
};
