import {useReducer} from "react";
import {Button} from "../Button/component";

const DEFAULT_VALUE = {
  name: "",
  surname: "",
};

const reducer = (state, {type, payload} = {}) => {
  switch (type) {
    case "setName":
      return {...state, name: payload};
    case "setSurname":
      return {...state, text: payload};
    default:
      return state;
  }
};

export const AuthForm = ({onClick}) => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  return (
    <div>
      <h1>Modal</h1>
      <div>
        <label>Name</label>
        <input
          value={form.name}
          onChange={(event) =>
            dispatch({type: "setName", payload: event.target.value})
          }
        />
      </div>
      <div>
        <label>Surname</label>
        <input
          value={form.text}
          onChange={(event) =>
            dispatch({type: "setSurname", payload: event.target.value})
          }
        />
      </div>
      <Button onClick={() => onClick({...form})}>Войти</Button>
    </div>
  );
};
