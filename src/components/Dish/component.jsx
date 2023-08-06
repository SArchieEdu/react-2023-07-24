import {useState} from "react";
import {Counter} from "../Counter/component";

export const Dish = ({ dish }) => {

  const [quantity, updateQuantity] = useState(
      0
  );

  return <div>
    <h4>{dish.name}</h4>
    <div>
      Quantity: <Counter quantity={quantity} updateQuantity={updateQuantity}/>
      <br/>
      Ingredients: {dish.ingredients.map((item, i) => (<span key={i}>{`${item}${dish.ingredients.length - 1 !== i ? ', ' : ''}`}</span>))
    }
      <br/>
      Price: <b>{dish.price * quantity}$</b>
    </div>
  </div>;
};
