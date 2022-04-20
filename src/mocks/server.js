import { setupServer } from "msw/node";
import { handler } from "./handler";
import "@testing-library/jest-dom";
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { rest } from "msw";
const server = setupServer(...handler);
beforeAll(() => server.listen({
    onUnhandledRequest : 'error'
})),
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

export { server, rest };