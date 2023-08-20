import { useSelector } from "react-redux";
import { selectDishById } from "../../store/features/dish/selectors.js";
import { getCartItemQuantityById } from "../../store/features/cart/selectors.js";

export const RestaurantCartItemContainer = ({ itemId }) => {
  const dish = useSelector((state) =>
    selectDishById(state, itemId)
  );

  const quantity = useSelector((state) =>
    getCartItemQuantityById(state, itemId)
  );

  return (
    <>
      {quantity > 0 && <li>{dish.name}: {quantity}</li>}
    </>
  );
};
