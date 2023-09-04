import { useReducer } from "react";
import { Button } from "../Button/component";

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
    case "clearForm":
      return { ...DEFAULT_VALUE };
    default:
      return state;
  }
};

export const NewReviewForm = ({
  onSaveForm,
  reviewInitial = DEFAULT_VALUE,
  isEdit,
  isLoading,
}) => {
  const [form, dispatch] = useReducer(reducer, reviewInitial);
  const { name } = reviewInitial;

  const handleSaveClick = () => {
    onSaveForm({
      ...form,
      userId: reviewInitial?.userId,
    });

    if (!isEdit) {
      dispatch({ type: "clearForm" });
    }
  };

  return (
    <div>
      {name && (
        <div>
          <label>Name</label>
          <input
            value={form.name}
            onChange={(event) =>
              dispatch({ type: "setName", payload: event.target.value })
            }
          />
        </div>
      )}
      <div>
        <label>Text</label>
        <input
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          value={form.rating}
          onChange={(event) =>
            dispatch({ type: "setRating", payload: event.target.value })
          }
        />
      </div>
      <Button disabled={isLoading} onClick={handleSaveClick}>
        Save
      </Button>
    </div>
  );
};
