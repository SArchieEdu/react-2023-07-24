import { useCallback, useReducer } from "react";
import { Button } from "../Button/component";

const FORM_DEFAULT = {
  first_name: "",
  last_name: "",
};

const FORM_ACTIONS = {
  setFirstName: "setFirstName",
  setLastName: "setLastName",
}

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case FORM_ACTIONS.setFirstName:
      return { ...state, first_name: payload };
    case FORM_ACTIONS.setLastName:
      return { ...state, last_name: payload };
    default:
      return state;
  }
};

export const AuthForm = ({ onLoginClick }) => {
  const [form, dispatch] = useReducer(reducer, FORM_DEFAULT);

  const isLoginButtonDisabled = !(form.first_name && form.last_name)

  const handleLoginButtonClick = useCallback(() => {
    onLoginClick(form);
  }, [form, onLoginClick]);

  return (
    <div>
      <h2>Sign in to your account</h2>
      <div>
        <label>First name: </label>
        <input
          value={form.first_name}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.setFirstName,
              payload: event.target.value
            })
          }
        />
      </div>
      <div style={{ margin: "10px 0" }}>
        <label>Last name: </label>
        <input
          value={form.last_name}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.setLastName,
              payload: event.target.value,
            })
          }
        />
      </div>
      <Button
        disabled={isLoginButtonDisabled}
        onClick={handleLoginButtonClick}
      >
        Sign In
      </Button>
    </div>
  );
};
