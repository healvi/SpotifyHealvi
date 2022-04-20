/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
test('Test Home Untuk APP', () => {
  render(
  <Provider store={store}>
      <App />
  </Provider>
  );
  const linkElement = screen.getByTestId('home-app')
  expect(linkElement).toBeInTheDocument();
});
