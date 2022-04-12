import { React } from 'react';
import {
  Redirect, Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import CreatePlaylist from '../containers/CreatePlaylist';
import Tracks from '../containers/Tracks/Tracks';
import Playlist from '../containers/playlist/Playlist';
import NotFound from '../containers/NotFound';
import Home from '../containers/Home';
import { isAuth } from '../utils/OAuth';
import Login from '../containers/Login';
import * as Middleware from '../middleware/Middleware';
import Navbar from '../components/Navbar';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (isAuth ? (
          <Redirect to="/create-playlist" />
        ) : (
          <Redirect to="/Login" />
        ))}
      />
      <Route exact path="/">
        <Middleware.Authinticated>
          <Navbar>
            <Home />
          </Navbar>
        </Middleware.Authinticated>
      </Route>
      <Route path="/login">
        <Middleware.Guest>
          <Login />
        </Middleware.Guest>
      </Route>
      <Route path="/create-playlist">
        <Middleware.Authinticated>
          <Navbar>
            <CreatePlaylist />
          </Navbar>
        </Middleware.Authinticated>
      </Route>
      <Route path="/playlist">
        <Middleware.Authinticated>
          <Navbar>
            <Playlist />
          </Navbar>
        </Middleware.Authinticated>
      </Route>
      <Route path="/track">
        <Middleware.Authinticated>
          <Navbar>
            <Tracks />
          </Navbar>
        </Middleware.Authinticated>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
