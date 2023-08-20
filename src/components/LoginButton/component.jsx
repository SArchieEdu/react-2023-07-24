import {useDispatch, useSelector} from "react-redux";
import {Button} from "../Button/component.jsx";
import {createPortal} from "react-dom";
import {useState} from "react";
import {LoginForm} from "../LoginForm/component.jsx";

export const LoginButton = () => {
  const {currentUser} = useSelector((store) => store.auth);
  const [isModalOpened, setIsModalOpened] = useState();
  const dispatch = useDispatch();

  const handleLogin = (login) => {
    setIsModalOpened(false);
    dispatch({type: "login", payload: login});
  };

  return (
    <>
      <div>
        {currentUser && <span>{currentUser}</span>}
        <Button
          onClick={() => {
            currentUser ? dispatch({type: "logout"}) : setIsModalOpened(true);
          }}
        >
          {currentUser ? "Logout" : "Login"}
        </Button>
      </div>

      {isModalOpened &&
        createPortal(
          <LoginForm onLogin={handleLogin} />,
          document.getElementById("modal-container")
        )}
    </>
  );
};
