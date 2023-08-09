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
        return { ...state, ingredients: [...payload.split(',')]  };
      default:
        return state;
    }
};

export const NewDish = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);

    return (
        <div>
            <h3>Добавить новое блюдо:</h3> 
            <div>
                <label>Название блюда: </label>
                <input
                value={form.name}
                onChange={(event) =>
                    dispatch({ type: "setName", payload: event.target.value })
                }
                />
            </div>
            <div>
                <label>Цена блюда:</label>
                <input
                value={form.price}
                onChange={(event) =>
                    dispatch({ type: "setPrice", payload: event.target.value })
                }
                />
            </div>
            <div>
                <label>Ингредиенты:</label>
                <input
                value={form.ingredients.join()}
                onChange={(event) =>
                    dispatch({ type: "setIngredients", payload: event.target.value })
                }
                />
            </div> 
        </div>
    )
}