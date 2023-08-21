import {selectRestaurantById} from "../../store/features/restaurant/selectors";
import {Restaurant} from "./component";
import { useSelector } from "react-redux";

export const RestaurantContainer = ({restaurantId}) => {
  const restaurant = useSelector((state) =>
      selectRestaurantById(state, restaurantId)
  );

  if (restaurantId) {
    return <Restaurant restaurant={restaurant} />;
  } else {
    ''
  }
};
