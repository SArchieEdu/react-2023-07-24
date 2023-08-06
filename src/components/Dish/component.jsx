import {useState} from "react";
import {Counter} from "../Counter/component";

export const Dish = ({ dish }) => {

  const [quantity, updateQuantity] = useState(
      0
  );

  return <div>
    <h4>{dish.name}</h4>
    <div>
      Количество: <Counter quantity={quantity} updateQuantity={updateQuantity}/>
      <br/>
      Цена: <b>{dish.price * quantity}$</b>
    </div>
  </div>;
};
