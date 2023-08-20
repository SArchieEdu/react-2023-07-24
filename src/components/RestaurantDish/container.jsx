import { useSelector } from "react-redux";
import { selectDishById } from "../../store/features/dish/selectors.js";
import { Dish } from "../Dish/component.jsx";

export const RestaurantDishContainer = ({ dishId }) => {
  const dish = useSelector((state) =>
    selectDishById(state, dishId)
  );

  return <Dish dish={dish} />;
};
