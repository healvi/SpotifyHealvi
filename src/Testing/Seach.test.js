/* eslint-disable no-undef */
import  "@testing-library/react"
import "@testing-library/jest-dom"
import axios from "axios";
import { ghost } from "../mocks/fakejson";
import {rest} from 'msw'
import {setupServer} from 'msw/node'
const server = setupServer(
    rest.get(
        `https://api.spotify.com/v1/search?q=ghost&type=track&market=ID&limit=1`,
        (req, res, ctx) => {
          return res(ctx.status(200),ctx.json(ghost));
        }
      ),
      rest.get(
        `https://api.spotify.com/v1/me/playlists?limit=1`,
        (req, res, ctx) => {
          return res(ctx.status(200),ctx.json(ghost));
        }
      ),
        // Get artis
        rest.get(
          `https://api.spotify.com/v1/artists/adadd`,
          (req, res, ctx) => {
            return res(ctx.status(200),ctx.json(getArtist));
          }
        ),
  )

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it("Get Track", async () => {
  const data = await axios.get("https://api.spotify.com/v1/search?q=ghost&type=track&market=ID&limit=1")
  expect(data.data).toEqual(ghost)
})
it("Get Track", async () => {
  const data = await axios.get("https://api.spotify.com/v1/search?q=ghost&type=track&market=ID&limit=1")
  expect(data.data).toEqual(ghost)
})
it("Get Track", async () => {
  const data = await axios.get("https://api.spotify.com/v1/search?q=ghost&type=track&market=ID&limit=1")
  expect(data.data).toEqual(ghost)
})

 