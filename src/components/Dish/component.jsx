import { useState } from "react";
import { Button } from "../Button/component";
import "./style.css";

export const Dish = ({ dish }) => {
  const [dishCount, setDishCount] = useState(0);
  const incrementDishCount = () => setDishCount(dishCount + 1);
  const decrementDishCount = () => {
    if (dishCount === 0) return;
    setDishCount(dishCount - 1);
  };

  return (
    <div className="dish">
      <div>
        <div>
          <h3>Dish</h3>
          <p>Name: {dish.name}</p>
          <p>Price: {dish.price}</p>
        </div>
        <ul>
          <p>Ingredient list</p>
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <Button onClick={incrementDishCount}>+</Button>
        <span>{dishCount}</span>
        <Button onClick={decrementDishCount}>-</Button>
        <span>цена: {dishCount * dish.price}</span>
      </div>
    </div>
  );
};
