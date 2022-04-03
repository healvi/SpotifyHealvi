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
    getToken();
  }, []);

  const getToken = () => {
    if (window.location.hash.includes("access_token")) {
      let tokenApi = window.location.hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      setToken(tokenApi);
      setAuth(true);
    } else {
      setToken("");
      setAuth(false);
    }
  };
  return (
    <div className="App">
      <Navbar />
      {/* <SpotifyUseE token={token} auth={auth} /> */}
      {/* <CreatePlaylist  token={token} auth={auth} /> */}
      <Routes>
        <Route path="/" element={<SpotifyUseE token={token} auth={auth} />} />
        <Route
          path="/playlist"
          element={<CreatePlaylist token={token} auth={auth} />}
        />
      </Routes>
    </div>
  );
};

export default App;
