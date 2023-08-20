import {selectRestaurantById} from "../../store/features/restaurant/selectors";
import {Restaurant} from "./component";
import {useSelector} from "react-redux";

export const RestaurantContainer = ({restaurantId, ...props}) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Restaurant restaurant={restaurant} {...props} />;
};
