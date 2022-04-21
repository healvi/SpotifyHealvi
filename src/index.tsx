import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
// import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//    <ColorModeScript />
// <ChakraProvider theme={theme}>
//   <Provider store={store}>
//     <App />
//   </Provider>
// </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
serviceWorker.unregister();
reportWebVitals();
