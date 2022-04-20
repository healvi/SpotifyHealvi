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
  )

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it("Get Track", async () => {
  const data = await axios.get("https://api.spotify.com/v1/search?q=ghost&type=track&market=ID&limit=1")
  expect(data.data).toEqual(ghost)
})
// test("handles failure", async () => {
//     server.use(
//       rest.get("https://api.spotify.com/v1/search?q=ghost&type=track&market=ID&limit=1", (_req, res, ctx) => {
//         return res(ctx.json(ghost));
//       })) 
//       const data = await axios.get("https://api.spotify.com/v1/search?q=ghost&type=track&market=ID&limit=1",  {headers: {
//         'Authorization' : "Bearer BQB41EDnbFpPhzj6YteDjCyduPNElWtrzYpVm5-5MmvdmQerKWzQCYHIz3TRolaYgFNee3M4jKbZf--4vfAo1f5i342sh8Mf2bESb8fsJcCS5ltgqIPMcZod0BFNSKn3AQZA-bwECklKotBXP6_7DNKJta8W8ytG7cnRQxSP5RdiKdH_VjqkHVwk4kjNTt0YaEzBEZc7QrMtffpXJm1KN_RTJxfOBEVVzYphOF5iWnGf7fJcQi5w"
//       }
//     })
//     await expect(data.data).toEqual(ghost)
// })
 