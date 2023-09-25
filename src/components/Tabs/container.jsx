import { useSelector } from "react-redux"
import { selectRestaurantIds } from "../../store/features/restaurants/selectors"
import { Tabs } from "./component";

export const RestaurantTabsContainer = (props) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  return <Tabs restaurantIds={restaurantIds} {...props} />
}