import { useReducer } from "react";
import "./style.css";

const DEFAULT_VALUES = {
  dishName: "",
  dishPrice: 0,
  dishIngredients: []
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setDishName":
      return { ...state, dishName: payload };
    case "setDishPrice":
      return { ...state, dishPrice: payload };
    case "processDishIngredients": {
      const ingredients = payload
        .split(",")
        .map(ingredient => ingredient.trim());
      return { ...state, dishIngredients: ingredients };
    }
    default:
      return state;
  }
};

export const NewDish = () => {
  const [form, setDishValue] = useReducer(reducer, DEFAULT_VALUES);

  console.log(form);

  return (
    <div className="new-dish">
      <div>
        <label>Dish Name</label>
        <input
          type="text"
          value={form.dishName}
          onChange={e =>
            setDishValue({ type: "setDishName", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>Dish Price</label>
        <input
          type="number"
          value={form.dishPrice}
          onChange={e =>
            setDishValue({ type: "setDishPrice", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>Dish Ingredients</label>
        <input
          type="text"
          value={form.dishIngredients.join(", ")}
          onChange={e =>
            setDishValue({
              type: "processDishIngredients",
              payload: e.target.value
            })
          }
          // onChange={e => onSetDishName(e.target.value)}
        />
      </div>
    </div>
  );
};
