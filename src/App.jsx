import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import CreatePlaylist from "./containers/CreatePlaylist";
import SpotifyUseE from "./containers/SpotifyUseE";

const App = () => {
  const [token, setToken] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    let auth = window.localStorage.getItem("auth");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("auth", true);
      setToken(token);
      setAuth(true);
    } else {
      setToken(token);
      setAuth(auth);
    }
  }, []);

  const logout = () => {
    setToken("");
    setAuth(false);
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("auth");
    window.location.reload();
  };
  return (
    <div className="App">
      <Navbar auth={auth} logout={logout} />
      {token ? (
        <Routes>
          <Route path="/" element={<SpotifyUseE token={token} auth={auth} />} />
          <Route
            path="/playlist"
            element={<CreatePlaylist token={token} auth={auth} />}
          />
        </Routes>
      ) : (
        <div className="btn btn-danger">Anda Belum Login</div>
      )}
    </div>
  );
};

export default App;
