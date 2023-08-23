import { useDispatch, useSelector } from "react-redux";
import { Restaurants } from "./component";
import { useEffect } from "react";
import { selectIsRestaurantsLoading } from "../../store/features/restaurant/selectors";
import { loadRestaurantsIfNotExist } from "../../store/features/restaurant/thunks/load-restaurants.js";
import { Loader } from "../Loader/component.jsx";

export const RestaurantsContainer = () => {
  const isLoading = useSelector(selectIsRestaurantsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantsIfNotExist());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return <Restaurants />;
};
