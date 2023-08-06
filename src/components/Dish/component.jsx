import { useState } from "react";
import { Button } from "../Button/component";

export const Dish = ({ dish }) => {
  
  const [counter, setCounter] = useState(0);

  return <div>
    {dish.name}
    <Button onClick={()=>setCounter(Math.max(counter-1,0))}>-</Button>
    {counter}  
    <Button onClick={()=>setCounter(counter+1)}>+</Button>
    {`total: ${counter*dish.price}`}
  </div>;
};
