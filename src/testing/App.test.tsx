/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Login from "../containers/Auth/Login";
import generateRandomString from "../utils/RandomString";
import { App } from "../App";
export const query = "ghost";
export const uri = "spotify:track:6I3mqTwhRpn34SLVafSH7G";
export const idartsit = "1uNFoZAHBGtllmzznpCI3s";
export const idplaylist = "3EbFZCxa3TfbcfL7QJFgTm";
export const id = "zg8yzyhbwlju129yafigcgt7d";
describe("Login", () => {
  test("Button Login Test", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const button = screen.getByTestId("button-login");
    fireEvent.click(button);
  });
});

describe("search", () => {
  test("search", async () => {
    window.history.pushState(
      {},
      "Landing",
      `#access_token=${generateRandomString(
        40
      )}&token_type=Bearer&expires_in=3600`
    );
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      expect(window.location.pathname).toStrictEqual("/");
    });

    const searchInput = screen.getByTestId("inputsong");
    expect(searchInput).toBeInTheDocument();
    await fireEvent.change(searchInput, { target: { value: query } });
  });

  test("check card", async () => {
    setTimeout(async () => {
      await waitFor(() => {
        const cardsong = screen.getByTestId("cardsong");
        expect(cardsong).toBeInTheDocument();
        const cardimage = screen.getByTestId("cardimage");
        expect(cardimage).toBeInTheDocument();
        const cardtitle = screen.getByTestId("cardtitle");
        expect(cardtitle).toBeInTheDocument();
        const cardartist = screen.getByTestId("cardartist");
        expect(cardartist).toBeInTheDocument();
        const cardtime = screen.getByTestId("cardtime");
        expect(cardtime).toBeInTheDocument();
        const buttonsong = screen.getByTestId("buttonsong");
        expect(buttonsong).toBeInTheDocument();
      });
    }, 0);
  });
});
