import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantMenuById } from "../../store/features/restaurant/selectors";
import { Menu } from "./component";
import { useEffect } from "react";
import { loadDishesByRestaurantIfNotExist } from "../../store/features/dish/thunks/load-dishes-by-restaurant";
import { selectIsDishesLoading } from "../../store/features/dish/selectors";
import { Loader } from "../Loader/component.jsx";

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
    return <Loader />;
  }

  return <Menu dishIds={dishIds} />;
};
