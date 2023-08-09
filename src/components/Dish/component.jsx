import { useState } from "react";

export const Dish = ({ dish }) => {
  
  const [valueOfDishes, setValueOfDishes] = useState(0)

  const increment = () => {
    setValueOfDishes(valueOfDishes + 1);
  }
  const decrement = () => {
    valueOfDishes > 0 ? setValueOfDishes(valueOfDishes - 1) : 0;
  }
  const changeInputValue = (evt) => {
    evt.target.value >= 0 ? setValueOfDishes(parseInt(evt.target.value)) : 0;
  }

  const total = dish.price * valueOfDishes;

  return (
    <div>
      <h2>{dish.name}</h2>
      <button onClick={decrement}>-</button>
      <input type="number" value = {valueOfDishes} onChange={changeInputValue}/> 
      <button onClick={increment}>+</button>
      <p>At all: {total}</p>
    </div>
  )
    
};
