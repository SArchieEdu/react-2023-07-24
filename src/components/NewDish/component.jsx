import { useRef } from 'react';
import { useReducer } from 'react';

const SET_NAME = 'setName';
const SET_PRICE = 'setPrice';
const SET_INGREDIENTS = 'setIngredients';
const DEFAULT_DISH = {
    name: '',
    price: '',
    ingredients: [],
}

const reducer = (state, {type, payload} = {}) => {
    switch (type) {
        case SET_NAME: {
            return {...state, name: payload };
        }
        case 'setPrice': {
            return {...state, price: payload };
        }
        case 'setIngredients': {
            const newIngredients = payload.split(',').map((item) => item.trim());

            return {...state, ingredients: newIngredients };
        }
        default: {
            return state;
        }
    }
}

export const NewDish = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_DISH);
    const ingredientsInputRef = useRef(null);

    const handleAddIngredients = () => {
        const { current } = ingredientsInputRef;

        if(!current) {
            return null;
        }

        dispatch({ 
            type: SET_INGREDIENTS, 
            payload: current.value,
        })
    }

    return <div>
        <p>NewDish:</p>
        <div>
            <label>Name</label>
            <input
                value={form?.name}
                onChange={(event) =>
                    dispatch({ type: SET_NAME, payload: event.target.value })
                }
            />
        </div>
        <div>
            <label>Price</label>
            <input
                value={form?.price}
                onChange={(event) =>
                    dispatch({ type: SET_PRICE, payload: event.target.value })
                }
            />
        </div>
        <div>
            <label>Ingredients</label>
            <input
                ref={ingredientsInputRef}
                defaultValue={form?.ingredients?.join(', ')}
            />
            <button onClick={handleAddIngredients}>Add</button>
        </div>
    </div>
}