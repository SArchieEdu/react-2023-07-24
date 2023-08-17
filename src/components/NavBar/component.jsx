import { Button } from "../Button/component";
import { AppModal } from "../AppModal/component";
import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "../../custome-redux";
import "./style.scss";

const FORM_INIT_VALUE = {
  firstName: "",
  lastName: ""
};
const DEFAULT_AUTH_BTN_NAME = "SignIn";
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "setFirstName":
      return { ...state, firstName: payload };
    case "setLastName":
      return { ...state, lastName: payload };
    case "clearForm":
      return { ...state, lastName: "", firstName: "" };
    default:
      return state;
  }
};

export const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const username = useSelector(state => state.username);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const onSignIn = () => {
    dispatch({
      type: "setAuthName",
      payload: userForm.firstName
    });
    closeModal();
    setUserForm({ type: "clearForm" });
  };

  const [userForm, setUserForm] = useReducer(reducer, FORM_INIT_VALUE);
  const setDefaultAuthBtnName = () => {
    dispatch({
      type: "setAuthName",
      payload: DEFAULT_AUTH_BTN_NAME
    });
  };

  useEffect(() => {
    setDefaultAuthBtnName();
  }, []);

  const onSignInBtn = () => {
    if (username === DEFAULT_AUTH_BTN_NAME) {
      openModal();
    } else {
      setDefaultAuthBtnName();
    }
  };

  return (
    <div className="nav-bar">
      <Button onClick={onSignInBtn}>
        {username || DEFAULT_AUTH_BTN_NAME}
      </Button>

      <AppModal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <div>
            <label>First name</label>
            <input
              value={userForm.firstName}
              onChange={event =>
                setUserForm({
                  type: "setFirstName",
                  payload: event.target.value
                })
              }
            />
          </div>
          <div>
            <label>Last name</label>
            <input
              value={userForm.lastName}
              onChange={event =>
                setUserForm({
                  type: "setLastName",
                  payload: event.target.value
                })
              }
            />
          </div>
        </div>
        <Button
          disabled={!userForm.firstName || !userForm.lastName}
          onClick={onSignIn}>
          SignIn
        </Button>
        {userForm.firstName}
      </AppModal>
    </div>
  );
};
