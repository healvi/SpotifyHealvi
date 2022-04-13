import { React, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './store/Auth';
import { setUser } from './store/User';
import { authGenerate, isAuth } from './utils/OAuth';
import { deleteStorage, setStorage } from './utils/storage';
import getUserApi from './utils/api/userApi';
import Routes from './routes/routes';

const App = () => {
  const dispatch = useDispatch();
  const tokens = useSelector((state) => state.Auth.token);

  const setTokena = () => {
    try {
      const { token } = authGenerate();
      setStorage('token', token);
      dispatch(setToken(token));
    } catch (error) {
      deleteStorage();
      Redirect('/login');
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
      Redirect('/login');
    }
  };

  useEffect(() => {
    setTokena();
    if (isAuth) {
      setMeProfile(tokens);
    }
  }, []);

  return (
    <div className="App">

      <Routes />

    </div>
  );
};

export default App;
