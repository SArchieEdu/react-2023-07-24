import { useReducer } from "react";

const FORM_DEFAULT = {
  'name': '',
  'price': 5,
  'ingredients': [],
}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'setName':
      return { ...state, name: payload }
    case 'setPrice':
      return { ...state, price: payload }
    case 'setIngredients':
      return {
        ...state,
        ingredients: payload.split(',')
      }
  }

  throw Error('Unknown action: ' + type);
}

export const NewDish = () => {
  const [form, dispatch] = useReducer(reducer, FORM_DEFAULT)
  console.log(form);

  return (
    <div>
      <div>
        <label>Dish name:</label>
        <input
          value={form.name}
          onChange={(e) => dispatch({ type: "setName", payload: e.target.value })}
        />
      </div>
      <div>
        <label>Dish price:</label>
        <input
          type={"number"}
          value={form.price}
          onChange={(e) => dispatch({ type: "setPrice", payload: e.target.value })}
        />
        <span> $</span>
      </div>
      <div>
        <label>Dish ingredients:</label>
        <input
          value={form.ingredients}
          onChange={(e) => dispatch({ type: "setIngredients", payload: e.target.value })}
        />
      </div>
    </div>
  );
}
