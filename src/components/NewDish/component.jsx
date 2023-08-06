import { useState } from "react"

const DEFAULT_VALUE = {
  name: '',
  price: 0,
  ingredients: [],
}

export const NewDish = () => {
  const [form, setForm] = useState(DEFAULT_VALUE);

  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          value={form.price}
          onChange={(event) => setForm({ ...form, price: event.target.value })}
        />
      </div>
      <div>
        <label>Ingredients:</label>
        <input
          value={form.ingredients.join(',')}
          onChange={(event) => setForm({ 
            ...form, 
            ingredients: event.target.value ? event.target.value.split(',') : []
          })}
        />
      </div>
    </div>
  );
};