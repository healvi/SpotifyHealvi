import React from 'react';
import { useEffect } from 'react';
import './App.scss';
import { setToken } from './store/Auth';
import { setUser } from './store/User';
import { authGenerate, isAuth } from './utils/OAuth';
import { deleteStorage, setStorage } from './utils/storage';
import getUserApi from './utils/api/userApi';
import Routes from './routes/routes';
import { useAppSelector, useAppDispatch } from './app/hooks';

const App = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.Auth.token);

  const setTokena = () => {
    try {
      const { token } = authGenerate();
      setStorage('token', token);
      dispatch(setToken(token));
    } catch (error) {
      deleteStorage();
      // Redirect('/login');
    }
  };
  const setMeProfile = async () => {
    try {
      await getUserApi()
        .then((response) => {
          dispatch(setUser(response.data));
        })
        .catch(() => {
          deleteStorage();
          dispatch(setToken(''));
        });
    } catch (error) {
      console.log('error');
      deleteStorage();
      // Redirect('/login');
    }
  };

  useEffect(() => {
    setTokena();
    if (isAuth) {
      setMeProfile();
    }
  }, []);

  return (
    <div className="App" data-testid="home-app">
      <Routes />
    </div>
  );
};

export default App;
