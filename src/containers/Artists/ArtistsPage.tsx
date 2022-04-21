import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ArtistsPage";
import { ArtistAlbumApi, ArtistApi } from "../../api/res/ArtistApi";
import { artist } from "../../interface/Artist";
import { useEffect } from "react";
import CardArtist from "../../components/atoms/artist/CardArtist";
import ListAlbum from "../../components/atoms/artist/ListAlbum";
import { AllAlbum } from "../../interface/Album";
import { deleteStorage } from "../../utils/storage";
import { setAuth, setToken } from "../../store/Auth";
import { useAppDispatch } from "../../app/hooks";

const ArtistsPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [artist, setArtist] = useState<artist>();
  const [artistAlbum, setArtistAlbum] = useState<AllAlbum>();
  const getArtist = async () => {
    await ArtistApi(params.id)
      .then((response) => {
        setArtist(response.data);
      })
      .catch((e) => {
        e.request.status === 400 ? navigate("/notfound") : "";
        if (e.request.status === 401) {
          deleteStorage();
          dispatch(setToken(""));
          dispatch(setAuth(false));
          navigate("/login");
        }
      });
  };

  const getArtistAlbum = async () => {
    await ArtistAlbumApi(params.id)
      .then((response) => {
        setArtistAlbum(response.data);
      })
      .catch((e) => {
        e.request.status === 400 ? navigate("/notfound") : "";
        if (e.request.status === 401) {
          deleteStorage();
          dispatch(setToken(""));
          dispatch(setAuth(false));
          navigate("/login");
        }
      });
  };
  useEffect(() => {
    getArtist();
    getArtistAlbum();
  }, [params]);

  const artiscard = artist ? <CardArtist artist={artist} /> : <div></div>;
  const albumlist = artistAlbum ? (
    <ListAlbum album={artistAlbum} />
  ) : (
    <div></div>
  );
  return (
    <div className="container-artist">
      <div className="container-card">{artiscard}</div>
      <div className="container-list">{albumlist}</div>
    </div>
  );
};

export default ArtistsPage;
