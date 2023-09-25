import { Button } from "../Button/component";
import { createPortal } from "react-dom";
import { LoginForm } from "../LoginForm/component";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import styles from "./styles.module.css";

export const LoginButton = () => {
  const [showModal, setShowModal] = useState();
  const { currentUser, login, logout } = useContext(UserContext);
  return (
    <>
      <div>
        {currentUser && <span className={styles.user}>{currentUser}</span>}
        <Button
          onClick={() => {
            currentUser ? logout() : setShowModal(true);
            //setUser(user ? null : "Вася");
          }}
        >
          {currentUser ? "Logout" : "Login"}
        </Button>
      </div>
      {showModal &&
        createPortal(
          <LoginForm
            onClose={(user) => {
              setShowModal(false);
              login(user);
            }}
          />,
          document.getElementById("modal-container")
        )}
    </>
  );
};
