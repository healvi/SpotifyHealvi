import "./App.scss";
import Navbar from "./components/Navbar";
import CreatePlaylist from "./containers/CreatePlaylist";
import SpotifyUseE from "./containers/SpotifyUseE";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <SpotifyUseE />
    </div>
  );
};

export default App;
