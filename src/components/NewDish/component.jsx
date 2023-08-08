import { useReducer } from 'react';

const DEFAULT_VALUE = {
    name: '',
    price: '',
    ingredients: [],
};

const reducer = (state, { type, payload } = {}) => {
    switch (type) {
        case "setName":
            return { ...state, name: payload };
        case "setPrice":
            return { ...state, price: payload };
        case "setIngredients":
            return { ...state, ingredients: payload };
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
                <label>Name</label>
                <input
                    value={form.name}
                    onChange={(event) =>
                        dispatch({ type: "setName", payload: event.target.value })
                    }
                />
            </div>
            <div>
                <label>Price</label>
                <input
                    value={form.price}
                    onChange={(event) =>
                        dispatch({ type: "setPrice", payload: event.target.value })
                    }
                />
            </div>
            <div>
                <label>Ingredients</label>
                <input
                    value={form.ingredients}
                    onChange={(event) =>
                    dispatch({ type: "setIngredients", payload: event.target.value.split(',') })
                    }
                />
            </div>
        </div>
    );
}