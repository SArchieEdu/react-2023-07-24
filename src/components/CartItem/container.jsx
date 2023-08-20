import {selectDishById} from "../../store/features/dish/selectors";
import {CartItem} from "./component";
import {useSelector} from "react-redux";

export const CartItemContainer = ({dishId, count}) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return <CartItem dish={dish} count={count} />;
};
