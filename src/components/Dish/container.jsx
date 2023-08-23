import { useDispatch, useSelector } from "react-redux";
import { selectDishById } from "../../store/features/dishes/selectors";
import { Dish } from "./component";
import { selectCartById } from "../../store/features/cart/selectors";
import { selectUserModule } from "../../store/features/user/selectors";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const count = useSelector((state) => selectCartById(state, dishId)) || 0;
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectUserModule);

  const increment = () => {
    dispatch({ type: "increment", payload: dish.id });
  };
  const decrement = () => {
    dispatch({ type: "decrement", payload: dish.id });
  };

  return (
    <Dish
      dish={dish}
      count={count}
      increment={increment}
      decrement={decrement}
      disabled={!isLoggedIn}
    />
  );
};
