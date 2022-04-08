import { React, useEffect } from 'react';
import {
  Redirect, Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import CreatePlaylist from './containers/CreatePlaylist';
import SpotifyUseE from './containers/SpotifyUseE';
import { setToken } from './store/Auth';
import { setUser } from './store/User';
import { authGenerate, isAuth } from './utils/OAuth';
import { deleteStorage, setStorage } from './utils/storage';
import getUserApi from './utils/api/userApi';
import { urlGet } from './utils/spotifyconf';
import Playlist from './containers/Playlist';
import NotFound from './containers/NotFound';
import Home from './containers/Home';

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
      {isAuth ? (
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (isAuth ? (
                <Redirect to="/create-playlist" />
              ) : (
                <Redirect to="/" />
              ))}
            />

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create-playlist">
              <CreatePlaylist />
            </Route>
            <Route path="/playlist">
              <Playlist />
            </Route>
            <Route path="/track">
              <SpotifyUseE />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      ) : (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <a href={urlGet} className="btn btn-danger">
            Anda Belum Login, Klik Untuk Login
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
