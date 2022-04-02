import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { urlGet, USERID } from "../data/spotifyconf";
import CardPlaylist from "../components/playlist/CardPlaylist";
const CreatePlaylist = () => {
  const [playlist, setFromPlayList] = useState({
    title: "",
    describe: "",
  });
  const [token, setToken] = useState("");
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getToken();
    getPlaylist();
  }, [token]);

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

  const getPlaylist = async () => {
    if (auth) {
      const request = await axios
        .get("https://api.spotify.com/v1/me/playlists", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data.items);
        })
        .catch((error) => {
          alert("Request Gagal");
          if (error.response.status === 401) {
            window.location.replace("/");
          }
        });
    }
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFromPlayList({ ...playlist, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (auth) {
      const data = {
        name: playlist.title,
        description: playlist.describe,
        public: true,
      };
      await axios
        .post(`https://api.spotify.com/v1/users/${USERID}/playlists`, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setFromPlayList({ title: "", describe: "" });
          getPlaylist();
          alert("Berhasil mempuat palylist");
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 401) {
            window.location.replace("/");
          }
        });
    }
  };

  const getApiToken = window.location.hash.includes("access_token") ? (
    <div className="btn btn-success">Anda Sudah Login</div>
  ) : (
    <a href={urlGet} className="btn btn-primary mt-3">
      login
    </a>
  );

  const inputPlaylist = auth ? (
    <div className="mt-3">
      <h3>Input Playlist Form</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="titleplaylist" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={playlist.title}
            onChange={handleForm}
            className={`form-control ${
              playlist.title.length >= 10
                ? "is-valid"
                : playlist.title !== ""
                ? "is-invalid"
                : ""
            }`}
            id="titleplaylist"
            aria-describedby="titleplauhelp"
            required
          />
          <div id="titleplauhelp" className="form-text" minLength="10">
            Minimum 10 Character
          </div>
          <div className="valid-feedback">Looks good!</div>
          <div
            id="validationServerUsernameFeedback"
            className="invalid-feedback"
          >
            Character kurang dari 10
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="descplaylist" className="form-label">
            Description
          </label>
          <textarea
            value={playlist.describe}
            rows="6"
            name="describe"
            onChange={handleForm}
            type="text"
            className="form-control"
            id="descplaylist"
            required
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${
            playlist.title.length >= 10 && playlist.describe !== ""
              ? ""
              : "disabled"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  ) : (
    <div className="d-grid gap-2 mt-2">
      <div className="btn btn-danger">Anda Belum Login</div>
    </div>
  );

  const playlistCard =
    data.length > 0 ? (
      data.map((playlist) => {
        return <CardPlaylist key={playlist.id} data={playlist} track={false} />;
      })
    ) : (
      <div className="container d-flex justify-content-center align-content-center">
        <h1>Empty</h1>
      </div>
    );

  return (
    <div>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <div className="d-grid gap-2">{getApiToken}</div>
            {inputPlaylist}
          </div>
          <div className="col-md-9">
            <h2 className="bg-success text-white p-2 text-center">
              Your Playlist
            </h2>
            <div className="row">{playlistCard}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylist;
