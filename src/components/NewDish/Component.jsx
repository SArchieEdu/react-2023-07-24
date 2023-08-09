import { useReducer } from "react";

const DEFAULT_VALUE = {
  name: "",
  price: "",
  ingredients: [],
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
    case "setPrice":
      return { ...state, price: payload };
    case "setIngredients":
      return {
        ...state,
        ingredients: payload,
      };
    default:
      return state;
  }
};
export const NewDish = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  const handleNameChange = (evt) => {
    dispatch({ type: "setName", payload: evt.target.value });
  };
  const handlePriceChange = (evt) => {
    dispatch({ type: "setPrice", payload: evt.target.value });
  };
  const handleIngredientsChange = (evt) => {
    dispatch({ type: "setIngredients", payload: evt.target.value.split(",") });
    console.log(evt.target.value);
  };

  console.log(state);

  return (
    <form>
      <label htmlFor="text">Name</label>
      <input
        id="text"
        type="text"
        value={state.name}
        onChange={handleNameChange}
      />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        type="price"
        value={state.price}
        onChange={handlePriceChange}
      />
      <label htmlFor="ingredients">Ingredients</label>
      <input
        id="ingredients"
        type="ingredients"
        value={state.ingredients}
        onChange={handleIngredientsChange}
      />
    </form>
  );
};
