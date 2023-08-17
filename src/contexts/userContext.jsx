import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("SignIn");

  const toggleUsername = () => {
    setUsername(providerUsername =>
      providerUsername === "SignIn" ? "Alexander" : "SignIn"
    );
  };

  return (
    <UserContext.Provider value={{ username, toggleUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
