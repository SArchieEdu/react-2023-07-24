import { useState } from "react";
import { Button } from "../Button/component";

export const Dish = ({ dish }) => {
  
  const [counter, setCount] = useState(0);

  return <div>
    {dish.name}
    <Button onClick={()=>setCount(Math.max(counter-1,0))}>-</Button>
    {counter}  
    <Button onClick={()=>setCount(counter+1)}>+</Button>
    {`total: ${counter*dish.price}`}
  </div>;
};
