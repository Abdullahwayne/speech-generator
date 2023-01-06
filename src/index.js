import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import router from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { SnackbarProvider } from 'notistack'
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistedStore } from "./redux/store.redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={store}>
   

    <React.StrictMode>
    <GoogleOAuthProvider clientId="1029246771689-999m56n99msn9jhsv9du0la391hcf43o.apps.googleusercontent.com">
      <SnackbarProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
      </SnackbarProvider>
      </GoogleOAuthProvider>


      
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
