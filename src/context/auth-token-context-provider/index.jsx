import { createContext, useState } from "react";

const initValue = {};

export const AuthTokenContext = createContext(initValue);

export default function AuthTokenContextProvider(props) {
  const [authToken, setAuthToken] = useState(null);
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
