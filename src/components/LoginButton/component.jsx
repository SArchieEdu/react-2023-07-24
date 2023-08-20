import { Button } from "../Button/component.jsx";
import { createPortal } from "react-dom";
import { useState } from "react";
import { LoginForm } from "../LoginForm/component.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/features/auth/selectors.js";
import { authActions } from "../../store/features/auth/index.js";

export const LoginButton = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [isModalOpened, setIsModalOpened] = useState();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: authActions.logout })
  }

  return (
    <>
      <div>
        {currentUser && <span>{currentUser}</span>}
        <Button
          onClick={() => {
            currentUser ? logout() : setIsModalOpened(true);
          }}
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
