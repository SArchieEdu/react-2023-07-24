import { useState } from "react";

export const Dish = ({ dish }) => {
  const [counter, setCounter] = useState(0);
  
  return <div>
    <h4>{dish.name}</h4>
    <button onClick={() => counter > 0 && setCounter(counter-1)}>-</button>
    <input value={counter} />
    <button onClick={() => setCounter(counter+1)}>+</button>
    <p>Цена: {counter * dish.price}</p>
    </div>;
};
