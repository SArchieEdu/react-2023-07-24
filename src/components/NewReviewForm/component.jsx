import { useReducer } from "react";

const DEFAULT_VALUE = {
  name: "",
  text: "",
  rating: 5,
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    case "reset":
      return { ...state, ...DEFAULT_VALUE };
    default:
      return state;
  }
};

export const NewReviewForm = ({ onSubmit }) => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  const { name, text, rating } = form;
  const disabled = !name && !text;

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(form);
    }

    dispatch({ type: "reset" });
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          value={name}
          onChange={(event) => dispatch({ type: "setName", payload: event.target.value })}
        />
      </div>
      <div>
        <label>Text</label>
        <input
          value={text}
          onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          value={rating}
          onChange={(event) => dispatch({ type: "setRating", payload: event.target.value })}
        />
      </div>
      <button onClick={handleSubmit} disabled={disabled}>
        add
      </button>
    </div>
  );
};
