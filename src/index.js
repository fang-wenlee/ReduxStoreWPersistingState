import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
