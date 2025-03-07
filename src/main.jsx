import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import "modern-normalize";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
   <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
     {/* </PersistGate> */}
   </Provider>
);