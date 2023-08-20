import {useSelector} from "react-redux";
import {Cart} from "./component";

export const RestaurantCartContainer = () => {
  const cart = useSelector((state) => state.cart);

  return <Cart cart={cart} />;
};
