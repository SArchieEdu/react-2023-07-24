import { useState } from 'react';

const ADD = 'add';
const REMOVE = 'remove';

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  const toggleDish = (type) => {
    if(type === ADD) {
      setCount(count => count + 1);
      return;
    } 

    if(type === REMOVE && count > 0) {
      setCount(count => count - 1);
      return;
    }
  }

  return <div>
    {dish.name}
    <div>
      <button onClick={() => toggleDish(REMOVE)}>-</button>
      <span>{count}</span>
      <button onClick={() => toggleDish(ADD)}>+</button>
    </div>
    price: {Number(dish.price) *  count}
    </div>;
};
