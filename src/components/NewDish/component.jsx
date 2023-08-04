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
    case "setDishIngredients":
      return { ...state, dishIngredients: payload };

    default:
      return state;
  }
};

export const NewDish = () => {
  const [form, setDishName] = useReducer(reducer, DEFAULT_VALUES);

  const onSetDishName = value => {
    const ingredients = value
      .split(",")
      .map(ingredient => ingredient.trim());
    setDishName({ type: "setDishIngredients", payload: ingredients });
  };

  return (
    <div className="new-dish">
      <div>
        <label>Dish Name</label>
        <input
          type="text"
          value={form.dishName}
          onChange={e =>
            setDishName({ type: "setDishName", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>Dish Price</label>
        <input
          type="number"
          value={form.dishPrice}
          onChange={e =>
            setDishName({ type: "setDishPrice", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>Dish Ingredients</label>
        <input
          type="text"
          value={form.dishIngredients}
          onChange={e => onSetDishName(e.target.value)}
        />
      </div>
    </div>
  );
};
