import { selectRestaurantById } from "../../store/features/restaurant/selectors";
import { useSelector } from "react-redux";
import { Restaurant } from "./component.jsx";
import { RestaurantReviews } from "../Reviews/container.jsx";
import { RestaurantMenu } from "../Menu/container.jsx";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <>
      <Restaurant title={restaurant.name} />
      <RestaurantMenu dishesIds={restaurant.menu} />
      <RestaurantReviews reviewsIds={restaurant.reviews} />
    </>
  );
};
