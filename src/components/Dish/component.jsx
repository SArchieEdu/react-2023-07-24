import { Button } from "../Button/component";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemQuantityById } from "../../store/features/cart/selectors.js";
import { selectCurrentUser } from "../../store/features/auth/selectors.js";

export const Dish = ({ dish }) => {
  const currentUser = useSelector(selectCurrentUser);
  const quantity = useSelector((state) => getCartItemQuantityById(state, dish.id));
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment", payload: dish.id });
  };
  const decrement = () => {
    dispatch({ type: "decrement", payload: dish.id });
  };

  const { price: dishPrice, name } = dish || {};

  return (
    <div>
      <div>{name}</div>
      <Button disabled={quantity === 0 || !currentUser} onClick={decrement}>
        -
      </Button>
      <span> {quantity} </span>
      <Button disabled={quantity === 5 || !currentUser} onClick={increment}>
        +
      </Button>
      <div>Total: ${quantity * dishPrice}</div>
    </div>
  );
};
