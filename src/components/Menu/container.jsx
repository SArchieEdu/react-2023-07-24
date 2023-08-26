import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantMenuById } from "../../store/features/restaurant/selectors";
import { Menu } from "./component";
import { useEffect } from "react";
import {REQUEST_ID} from "../../store/features/request/constants";
import {loadDishesByRestaurantIfNotExist} from "../../store/features/dish/thunks/load-dishes-by-restaurant";
import {selectRequestStatus} from "../../store/features/request/selectors";
import {LOADING_STATUS} from "../../constants/loading-statuses";

export const MenuContainer = ({restaurantId}) => {
  const loadingStatus = useSelector((state) =>
    selectRequestStatus(state, REQUEST_ID.restaurants)
  );
  const dishIds = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDishesByRestaurantIfNotExist(restaurantId));
  }, [dispatch, restaurantId]);

  if (loadingStatus === LOADING_STATUS.loading) {
    return <div>Loading...</div>;
  }

  return <Menu dishIds={dishIds} />;
};
