import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import ThemeContextProvider from "./context/theme-context-provider/index.jsx";
import AuthTokenContextProvider from "./context/auth-token-context-provider/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeContextProvider>
      <AuthTokenContextProvider>
        <App />
      </AuthTokenContextProvider>
    </ThemeContextProvider>
  </Provider>
);
