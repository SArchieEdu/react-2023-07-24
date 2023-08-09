import { useReducer } from "react";

const DEFAULT_VALUE = {
  name: "",
  price: "",
  ingridients: [],
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
    case "setPrice":
      return { ...state, price: payload };
    case "setIngridients":
      return { ...state, ingridients: payload.split(',') };
    default:
      return state;
  }
};

export const NewDish = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  console.log(form);
  return (
    <div>
      <div>
        <label>Название</label>
        <input
          value={form.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Цена</label>
        <input
          value={form.price}
          onChange={(event) =>
            dispatch({ type: "setPrice", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Ингридиенты</label>
        <input
          value={form.ingridients.join(',')}
          onChange={(event) =>
            dispatch({ type: "setIngridients", payload: event.target.value })
          }
        />
      </div>
    </div>
  );
};
