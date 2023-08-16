import { AuthContext } from "./context.js";
import { useState } from "react";


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (first_name, last_name) => {
    setUser({
      'first_name': first_name,
      'last_name': last_name,
    })
  }

  const logout = () => {
    setUser(null);
  }

  const auth = {
    user,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}
