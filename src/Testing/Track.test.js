/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import Login from '../containers/Login';
import Tracks from '../containers/Tracks/Tracks';
import { store } from './../app/store';
test('Button Login Test', () => {
  render(
  <Provider store={store}>
      <Login />
  </Provider>
  );

  const button = screen.getByTestId('button-login');
  fireEvent.click(button)
});

test('Conatiner track', () => {
  render(
  <Provider store={store}>
      <Tracks />
  </Provider>
  );

  const ConatinerElement = screen.getByTestId('home-track')
  expect(ConatinerElement).toBeInTheDocument();
});

test('Gridtrack', () => {
  render(
  <Provider store={store}>
      <Tracks />
  </Provider>
  );

  const GridElement = screen.getByTestId('grid-track')
  expect(GridElement).toBeInTheDocument()
});



