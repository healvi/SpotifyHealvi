import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import CreatePlaylist from "./containers/CreatePlaylist";
import SpotifyUseE from "./containers/SpotifyUseE";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "./store/Auth";
import { setUser } from "./store/User";

const App = () => {
  const [token, setTokena] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      dispatch(setToken(token));
      setTokena(token);
    } else {
      dispatch(setToken(token));
      setTokena(token);
    }
    if (token) {
      setMeProfile(token);
    }
  }, []);

  const setMeProfile = async (tokena) => {
    await axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${tokena}`,
        },
      })
      .then((response) => {
        dispatch(setUser(response.data));
        window.localStorage.setItem("profileId", response.data.id);
        window.localStorage.setItem("profileName", response.data.display_name);
      })
      .catch((error) => {
        alert("Request Gagal");
        if (error.response.status === 401 && error.response) {
          dispatch(setToken(""));

          window.localStorage.removeItem("token");
          window.localStorage.removeItem("auth");
          window.localStorage.removeItem("profileId");
          window.localStorage.removeItem("profileName");
          window.location.replace("/");
        }
      });
  };
  const logout = () => {
    dispatch(setToken(""));

    window.localStorage.removeItem("token");
    window.localStorage.removeItem("auth");
    window.localStorage.removeItem("profileId");
    window.localStorage.removeItem("profileName");
    window.location.reload();
  };
  return (
    <div className="App">
      <Navbar logout={logout} />
      {token ? (
        <Routes>
          <Route path="/" element={<SpotifyUseE />} />
          <Route path="/playlist" element={<CreatePlaylist />} />
        </Routes>
      ) : (
        <div className="btn btn-danger">Anda Belum Login</div>
      )}
    </div>
  );
};

export default App;
