import { useEffect, useState } from "react";
import { Button } from "../Button/component";

export const Dish = ({ dish }) => {
  const [dishCounter, setDishCounter] = useState(0)
  const [priceCounter, setPriceCounter] = useState(0)
  
useEffect(() => {
  setPriceCounter(() => {
    return dishCounter * dish.price 
  })
}, [dishCounter, dish])

  const increase = () => {
    setDishCounter(count => count + 1)
  }
  const decrease = () => {
    if (dishCounter === 0) return
    setDishCounter(count => count - 1)
  }
  return (
    <div>
      <div>{dish.name}</div>
      <div style={{display: 'flex'}}>
        <Button onClick={decrease}>-</Button>
        <div>{dishCounter}</div>
        <Button onClick={increase}>+</Button>
        <div>{priceCounter} руб.</div>
      </div>
     
    </div>

  ) 
};
