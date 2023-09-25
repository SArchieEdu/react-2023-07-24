import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../store/features/restaurants/selectors";
import { Tab } from "./component";

export const RestaurantTabContainer = ({ restaurantId, ...props}) => {
  const restaurant = useSelector((state) => 
  selectRestaurantById(state, restaurantId));
  return <Tab title = {restaurant.name} {...props} />
}