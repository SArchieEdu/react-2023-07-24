import { useSelector } from "react-redux";
import { Cart } from "./component.jsx";
import { selectCartIds } from "../../store/features/cart/selectors.js";

export const RestaurantCartContainer = () => {
  const cartIds = useSelector(selectCartIds);

  return <Cart items={cartIds} />;
};
