import { useReducer } from "react";

const DEFAULT_VALUE = {
  name: "",
  text: "",
  rating: 5,
};

const reducer = (state, {type, payload} = {}) => {
  switch (type) {
    case "setName":
      return {...state, name: payload};
    case "setText":
      return {...state, text: payload};
    case "setRating":
      return {...state, rating: payload};
    default:
      return state;
  }
};

export const NewReviewForm = ({onSubmit}) => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  const isAddReviewButtonDisable = Boolean(
    !form.name || !form.text || !form.rating
  );

  return (
    <form onSubmit={(evt) => onSubmit(evt, form)}>
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
        <label>Text</label>
        <input
          value={form.text}
          onChange={(event) =>
            dispatch({type: "setText", payload: event.target.value})
          }
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          value={form.rating}
          onChange={(event) =>
            dispatch({type: "setRating", payload: event.target.value})
          }
        />
      </div>
      <button disabled={isAddReviewButtonDisable}>Add New Review</button>
    </form>
  );
};
