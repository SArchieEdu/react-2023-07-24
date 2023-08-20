import {selectDishById} from "../../store/features/dish/selectors";
import {Dish} from "../Dish/component";
import {useSelector} from "react-redux";

export const RestaurantDishContainer = ({dishId, ...props}) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return <Dish dish={dish} {...props} />;
};
