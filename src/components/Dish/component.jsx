import { useState } from "react";
import { Button } from "../Button/component";

export const Dish = ({ dish }) => {
  const [quantity, setQuantity] = useState(0)

  return <div>
    {dish.name}
    <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
    {quantity}
    <Button onClick={() => quantity !== 0 && setQuantity(quantity - 1)}>-</Button>
    <p>Total price: {dish.price * quantity}</p>
  </div>;
};
