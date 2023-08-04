import { useReducer } from "react"

const DEFAULT_VALUE = {
    name: "",
    price: 0,
    ingredients: [],
}

const dishReducer = (state, { type, payload }) => {
    switch (type) {
        case 'setName':
            return { ...state, name: payload }
        case 'setPrice':
            return { ...state, price: payload }
        case 'setIngredients':
            return { ...state, ingredients: [...payload] }
        default:
            return state
    }
}

export const NewDish = () => {
    const [form, dispatch] = useReducer(dishReducer, DEFAULT_VALUE)
    console.log(form)

    return (
        <div>
            <h4>Добавить новое блюдо</h4>
            <div>
                <label htmlFor="dish">Наименование блюда</label>
                <input id="dish" name="dish" type="text" value={form.name} onChange={(event) => dispatch({ type: 'setName', payload: event.target.value })} />
            </div>
            <div>
                <label htmlFor="price">Цена блюда</label>
                <input id="price" name="price" type="number" value={form.price} onChange={(event) => dispatch({ type: 'setPrice', payload: +event.target.value })} />
            </div>
            <div>
                <label htmlFor="ingredients">Ингредиенты</label>
                <input id="ingredients" name="ingredients" value={form.ingredients} type="text" onChange={(event) => dispatch({ type: 'setIngredients', payload: event.target.value.split(",") })} />
            </div>
        </div>
    )
}
