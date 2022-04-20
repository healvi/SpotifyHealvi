import {rest} from 'msw'
import { ghost } from './fakejson';

const searchParams = "GHOST";
export const handler = [
  rest.get(
    `https://api.spotify.com/v1/search?q=${searchParams}&type=track`,
    (req, res, ctx) => {
      return res(ctx.status(200),ctx.json(ghost));
    }
  ),
];