import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtistsPage from "../containers/Artists/ArtistsPage";
import Login from "../containers/Auth/Login";
import CreatePlaylist from "../containers/CreatePlaylist/CreatePlaylist";
import Home from "../containers/Home/HomePage";
import NotFound from "../containers/NotFound";
import PlaylistPage from "../containers/Playlists/PlaylistPage";
import TrackPage from "../containers/Track/TrackPage";
import UserProfile from "../containers/UserProfile/UserProfilePage";
import * as Middleware from "../middleware/Middleware";

const Routest = () => (
  <Router>
    <Routes>
      <Route
        path="/Login"
        element={
          <Middleware.Guest>
            <Login />
          </Middleware.Guest>
        }
      />
      <Route
        path="/"
        element={
          <Middleware.Authinticated>
            <Home />
          </Middleware.Authinticated>
        }
      >
        <Route index element={<CreatePlaylist />} />
        <Route path="playlist" element={<PlaylistPage />} />
        <Route path="track" element={<TrackPage />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="artist/:id" element={<ArtistsPage />} />
      </Route>
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default Routest;
