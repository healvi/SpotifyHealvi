import React from 'react';
import { useEffect } from 'react';
import './App.scss';
import { setAuth, setToken } from './store/Auth';
import { setUser } from './store/User';
import { deleteStorage, getStorage } from './utils/storage';
import getUserApi from './utils/api/userApi';
import Routes from './routes/routes';
import { useAppDispatch } from './app/hooks';
import { setTokena } from './utils/StartApp';
import { getPlaylistApi } from './utils/api/playlistApi';
import { setPlaylist } from './store/Playlist';
import { Box } from '@chakra-ui/react';

export const App = () => {
  const dispatch = useAppDispatch();
  const isAuthStorage = !!getStorage('token');
  const StartApplikasi = async () => {
    const token = setTokena();
    dispatch(setToken(token));
    dispatch(setAuth(true));
    try {
      await getUserApi()
        .then(async (response) => {
          dispatch(setUser(response.data));
          const { data } = await getPlaylistApi();
          dispatch(setPlaylist(data.items));
        })
        .catch(() => {
          deleteStorage();
          dispatch(setToken(''));
          dispatch(setAuth(false));
        });
    } catch (error) {
      window.location.replace('/login');
    }
  };

  useEffect(() => {
    if (isAuthStorage) {
      StartApplikasi();
    }
  }, []);

  return (
    <Box maxW="full">
      <Routes />
    </Box>
  );
};

export default App;
