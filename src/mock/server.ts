/* eslint-disable no-undef */
import "@testing-library/react";
import {
  creatPlaylist,
  deleteItemToPlaylist,
  getArtist,
  getArtistAlbum,
  getMePlaylist,
  id,
  idartsit,
  idplaylist,
  postItemToPlaylist,
  query,
  track,
} from "./fakejson";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  // get Track
  rest.get(
    `https://api.spotify.com/v1/search?q=${query}&type=track&market=ID&limit=1`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(track));
    }
  ),
  // Get Me Playlist
  rest.get(
    `https://api.spotify.com/v1/me/playlists?limit=1`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(getMePlaylist));
    }
  ),
  // Get artis
  rest.get(
    `https://api.spotify.com/v1/artists/${idartsit}`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(getArtist));
    }
  ),
  // Get artis ALbum
  rest.get(
    `https://api.spotify.com/v1/artists/${idartsit}/albums`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(getArtistAlbum));
    }
  ),
  // Get Post item playlist
  rest.post(
    `https://api.spotify.com/v1/playlists/${idplaylist}/tracks`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(postItemToPlaylist));
    }
  ),
  // Get delete item playlist
  rest.delete(
    `https://api.spotify.com/v1/playlists/${idplaylist}/tracks`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(deleteItemToPlaylist));
    }
  ),
  // create playlist
  rest.post(
    `https://api.spotify.com//v1/users/${id}/playlists`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(creatPlaylist));
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
