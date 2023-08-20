import { useReducer } from "react";
import { Button } from "../Button/component";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/features/auth/index.js";

const DEFAULT_FORM_VALUE = {
  login: "",
  password: "",
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setLogin":
      return { ...state, login: payload };
    case "setPassword":
      return { ...state, password: payload };

    default:
      return state;
  }
};

export const LoginForm = ({ onLogin }) => {
  const [form, formDispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  const dispatch = useDispatch();

  const login = (username) => {
    dispatch({ type: authActions.login, payload: username });
  }

  return (
    <div>
      <div>
        <label>Login</label>
        <input
          value={form.login}
          onChange={(event) =>
            formDispatch({ type: "setLogin", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Password</label>
        <input
          value={form.password}
          onChange={(event) =>
            formDispatch({ type: "setPassword", payload: event.target.value })
          }
        />
      </div>

      <Button
        disabled={!form.login || !form.password}
        onClick={() => {
          login(form.login);
          onLogin();
        }}
      >
        Login
      </Button>
    </div>
  );
};
