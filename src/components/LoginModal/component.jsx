import { useContext } from "react";
import { Modal } from "../Modal/component";
import { LoginModalContext } from "../../contexts/loginModalContext";
import { useReducer } from "react";
import { SessionContext } from "../../contexts/sessionContext";

const DEFAULT_VALUE = {
  name: "",
  surname: "",
};

const FORM_ACTION = {
  setName: "setName",
  setSurname: "setSurname",
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case FORM_ACTION.setName:
      return { ...state, name: payload };
    case FORM_ACTION.setSurname:
      return { ...state, surname: payload };
    default:
      return state;
  }
};

export const LoginModal = () => {
  const { showModal, setShowModal } = useContext(LoginModalContext);
  const { setSession } = useContext(SessionContext);

  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  const { name, surname } = form;

  const isDisabled = !name || !surname;

  const handleClick = () => {
    setSession(true);
    setShowModal(false);
  };

  return (
    <Modal open={showModal} onClose={setShowModal}>
      <header>Login</header>
      <hr />
      <div>
        <label>Name:</label>
        <input
          value={name}
          onChange={(event) => dispatch({ type: FORM_ACTION.setName, payload: event.target.value })}
        />
      </div>
      <div>
        <label>Surname:</label>
        <input
          value={surname}
          onChange={(event) =>
            dispatch({ type: FORM_ACTION.setSurname, payload: event.target.value })
          }
        />
      </div>
      <hr />
      <button disabled={isDisabled} onClick={handleClick}>
        Login
      </button>
      <button onClick={() => setShowModal(false)}>Close</button>
    </Modal>
  );
};
