import { Button } from "../Button/component.jsx";
import { useState } from "react";

export const Dish = ({ dish }) => {
  const [quantity, setQuantity] = useState(0);
  const updateQuantity = (quantity) => {
    if (quantity < 0) {
      quantity = 0;
    }

    setQuantity(quantity);
  };

  return (
    <div>
      <div>{dish.name}</div>
      <div>
        <Button onClick={() => updateQuantity(quantity - 1)}>-</Button>
        <span> {quantity} </span>
        <Button onClick={() => updateQuantity(quantity + 1)}>+</Button>
      </div>
      <div>Total: ${quantity * dish.price}</div>
    </div>
  );
};
