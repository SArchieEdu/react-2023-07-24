import { useState } from 'react';


export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  const toggleDish = (type) => {
    if(type === 'add') {
      setCount(count => count + 1);
      return;
    } 

    if(type === 'remove' && count > 0) {
      setCount(count => count - 1);
      return;
    }
  }

  return <div>
    {dish.name}
    <div>
      <button onClick={() => toggleDish('remove')}>-</button>
      <span>{count}</span>
      <button onClick={() => toggleDish('add')}>+</button>
    </div>
    price: {Number(dish.price) *  count}
    </div>;
};
