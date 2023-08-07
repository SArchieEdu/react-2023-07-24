import {useReducer, useState} from "react";
import {Counter} from "../Counter/component";

const DEFAULT_VALUE = {
  id: '',
  name: '',
  price: '',
  ingredients: ''
}

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setId":
      return { ...state, id: payload };
    case "setName":
      return { ...state, name: payload };
    case "setPrice":
      if (payload?.length && !isNaN(parseInt(payload))) {
        return { ...state, price: payload };
      }
      return  { ...state, price: '' };
    case "setIngredients":
      const validPayload = payload.length ? payload.replace(' ', '').split(',') : [];
      return { ...state, ingredients: validPayload };
    default:
      return state;
  }
};

export const NewDish = ({menu, setDish}) => {

  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  const sendForm = () => {
    setDish(menu.push(form));

    dispatch({ type: "setId", payload: '' })
    dispatch({ type: "setName", payload: '' })
    dispatch({ type: "setPrice", payload: '' })
    dispatch({ type: "setIngredients", payload: '' })
  }

  return <div>
    <h3>Add new dish:</h3>
    <div>
      <label htmlFor="Id">Id</label>
      <input
          id="Id"
          type="text"
          value={form.id}
          onChange={(event) =>
              dispatch({ type: "setId", payload: event.target.value })
          }
      />
    </div>
    <div>
      <label htmlFor="Name">Name</label>
      <input
          id="Name"
          type="text"
          value={form.name}
          onChange={(event) =>
              dispatch({ type: "setName", payload: event.target.value })
          }
      />
    </div>
    <div>
      <label htmlFor="Price">Price</label>
      <input
          id="Price"
          type="text"
          value={form.price}
          onChange={(event) =>
              dispatch({ type: "setPrice", payload: event.target.value })
          }
      />
    </div>
    <div>
      <label htmlFor="Ingredients">Ingredients</label>
      <input
          id="Ingredients"
          type="text"
          value={form.ingredients}
          onChange={(event) =>
              dispatch({ type: "setIngredients", payload: event.target.value })
          }
      />
    </div>
    <div>
      <button
          type="button"
          onClick={() => sendForm()}
          disabled={
            !(form.name?.length &&
            form.price?.length &&
            form.ingredients?.length)
          }
      >
        Add!
      </button>
    </div>
  </div>;
};
