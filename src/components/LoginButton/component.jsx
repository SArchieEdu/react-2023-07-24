import { useContext } from "react";
import { SessionContext } from "../../contexts/sessionContext";
import { LoginModalContext } from "../../contexts/loginModalContext";

export const LoginButton = () => {
  const { session, setSession } = useContext(SessionContext);
  const { setShowModal } = useContext(LoginModalContext);

  if (session) {
    return <button onClick={() => setSession(false)}>Igor D</button>;
  }

  return <button onClick={() => setShowModal(true)}>LogIn</button>;
};
