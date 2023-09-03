import {useEffect, useReducer} from "react";
import {Button} from "../Button/component";

let DEFAULT_VALUE = {
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
    case "clearForm":
      return {...DEFAULT_VALUE};
    default:
      return state;
  }
};

export const NewReviewForm = ({
  onSaveForm,
  isEdit,
  setIsEdit,
  review,
  user,
}) => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  useEffect(() => {
    if (isEdit) {
      dispatch({type: "setName", payload: user.name});
      dispatch({type: "setText", payload: review.text});
      dispatch({type: "setRating", payload: review.rating});
    }
  }, []);

  return (
    <div>
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
      {isEdit && <Button onClick={() => setIsEdit(false)}>Discard</Button>}
      <Button
        onClick={() => {
          onSaveForm({
            ...form,
            userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
          });
          dispatch({type: "clearForm"});
        }}
      >
        Save
      </Button>
    </div>
  );
};
