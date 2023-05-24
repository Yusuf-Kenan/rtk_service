import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import ThemeContextProvider from "./context/theme-context-provider/index.jsx";
import AuthTokenContextProvider from "./context/auth-token-context-provider/index.jsx";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthTokenContextProvider>
          <App />
        </AuthTokenContextProvider>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
