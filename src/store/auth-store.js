import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedInLK: false,
  isLoggedInJG: false,
  loginLK: () => {},
  loginJG: () => {},
  users: [],
});

export const AuthContextProvider = (props) => {
  const [isLoggedInLK, setIsLoggedInLK] = useState(false);
  const [isLoggedInJG, setIsLoggedInJG] = useState(false);

  const loginHandlerLK = () => {
    setIsLoggedInLK(true);
  };
  const loginHandlerJG = () => {
    setIsLoggedInJG(true);
  };

  const context = {
    isLoggedInLK: isLoggedInLK,
    isLoggedInJG: isLoggedInJG,
    loginLK: loginHandlerLK,
    loginJG: loginHandlerJG,

    users: [
      { username: "lk", password: "buc" },
      { username: "jg", password: "yoyek" },
    ],
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
