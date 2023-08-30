import { useContext } from "react";
import { Button } from "../Button/component.jsx";
import { UserContext } from "../../contexts/userContext.js";
import { createPortal } from "react-dom";
import { useState } from "react";
import { LoginForm } from "../LoginForm/component.jsx";
import styles from './styles.module.scss';
import classNames from "classnames";

export const LoginButton = () => {
  const { currentUser, logout } = useContext(UserContext);
  const [isModalOpened, setIsModalOpened] = useState();

  return (
    <>
      <div className={classNames(styles.root)}>
        {currentUser && <div>{currentUser}</div>}
        <Button
          onClick={() => {
            currentUser ? logout() : setIsModalOpened(true);
          }}
          type="authoriazation"
        >
          {currentUser ? "Logout" : "Login"}
        </Button>
      </div>

      {isModalOpened &&
        createPortal(
          <LoginForm onLogin={() => setIsModalOpened(false)} />,
          document.getElementById("modal-container")
        )}
    </>
  );
};
