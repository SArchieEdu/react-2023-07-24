import { useContext } from "react";
import { SessionContext } from "../../contexts/sessionContext";
import { LoginModalContext } from "../../contexts/loginModalContext";
import { useSelector } from "../../custome-redux";

export const LoginButton = () => {
  const { session, setSession } = useContext(SessionContext);
  const { setShowModal } = useContext(LoginModalContext);
  const user = useSelector(state => state.user);

  if (session) {
    return <button onClick={() => setSession(false)}>{`${user?.name} ${user?.surname}`}</button>;
  }

  return <button onClick={() => setShowModal(true)}>LogIn</button>;
};
