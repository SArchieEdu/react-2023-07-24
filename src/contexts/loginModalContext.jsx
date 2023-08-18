import { createContext, useState } from "react";

export const LoginModalContext = createContext(null);

export const LoginModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <LoginModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </LoginModalContext.Provider>
  );
};
