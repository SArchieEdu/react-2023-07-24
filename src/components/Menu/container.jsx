import { selectIsDishesLoading } from "../../store/features/dish/selectors";
import { loadDishesByRestaurantIfNotExist } from "../../store/features/dish/thunks.js/load-dishes-by-restaurant";
import { selectRestaurantMenuById } from "../../store/features/restaurants/selectors";
import { Menu } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const MenuContainer = ({ restaurantId }) => {
  const isLoading = useSelector(selectIsDishesLoading);
  const dishIds = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDishesByRestaurantIfNotExist(restaurantId));
  }, [dispatch, restaurantId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Menu dishIds={dishIds} />;
};
