import {useState} from "react";

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(1)
  const minus = () => {
    setCount(count - 1)
  }
  const plus = () => {
    setCount(count + 1)
  }
  return (
  <div>
  <h2>{dish.name}</h2>
    <button onClick={minus}>-</button>
    {count}
    <button onClick={plus}>+</button>
      {dish.price * count}$
  </div>
)
};
