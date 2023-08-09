import { useState } from 'react';

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  const removeDish = () => {
    if(count > 0) {
      setCount(count => count - 1);
    }
  }

  const addDish = () => {
    setCount(count => count + 1);
  }

  return <div>
    {dish.name}
    <div>
      <button onClick={removeDish}>-</button>
      <span>{count}</span>
      <button onClick={addDish}>+</button>
    </div>
    price: {Number(dish.price) *  count}
    </div>;
};