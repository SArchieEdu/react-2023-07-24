import { useDispatch } from "react-redux";
import { Restaurants } from "./component";
import { useEffect } from "react";
import { loadRestaurantsIfNotExist } from "../../store/features/restaurant/thunks/load-restaurants";
// import { REQUEST_ID } from "../../store/features/request/constants";
// import { selectRequestStatus } from "../../store/features/request/selectors";
import { LOADING_STATUS } from "../../constants/loading-statuses";
import { useRequest } from "../../hooks/use-request";

export const RestaurantsContainer = () => {
  const status = useRequest(loadRestaurantsIfNotExist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantsIfNotExist());
  }, [dispatch]);

  if (status === LOADING_STATUS.loading) {
    return <div>Loading...</div>;
  }

  return <Restaurants />;
};
