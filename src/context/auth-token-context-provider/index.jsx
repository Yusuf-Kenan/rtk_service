/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import useApi from "../../hooks/useApi";

const initValue = {};

export const AuthTokenContext = createContext(initValue);

export default function AuthTokenContextProvider(props) {
  const [authToken, setAuthToken] = useState(null);
  const userState = useSelector(state => state.userState);
  const localStorageToken = localStorage.getItem("token");
  const api = useApi();

  if (authToken === null && localStorageToken !== null) {
    setAuthToken(localStorageToken);
  } else {
    localStorage.setItem("token", authToken);
  }

  if (authToken !== null && userState.userData === null) {
    api
      .get("user/appData")
      .then((res) => {console.log(res)})
      .catch((err) => {console.log(err)});
  }

  const authContextValue = {
    authToken,
    setAuthToken,
  };
  return (
    <AuthTokenContext.Provider value={authContextValue}>
      {props.children}
    </AuthTokenContext.Provider>
  );
}
