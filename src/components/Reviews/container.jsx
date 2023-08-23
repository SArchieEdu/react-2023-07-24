import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { selectRestaurantReviewsById } from "../../store/features/restaurant/selectors";
import { selectIsReviewsLoading } from "../../store/features/review/selectors.js";
import { Loader } from "../Loader/component.jsx";
import { useEffect } from "react";
import { loadReviewsByRestaurantIfNotExist } from "../../store/features/review/thunks/load-reviews-by-restaurant.js";
import { loadUsersIfNotExist } from "../../store/features/user/thunks/load-users.js";
import { selectIsUsersLoading } from "../../store/features/user/selectors.js";

export const ReviewsContainer = ({ restaurantId }) => {
  const isReviewsLoading = useSelector(selectIsReviewsLoading);
  const isUsersLoading = useSelector(selectIsUsersLoading);
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewsByRestaurantIfNotExist(restaurantId));
    dispatch(loadUsersIfNotExist());
  }, [dispatch, restaurantId]);

  if (isReviewsLoading || isUsersLoading) {
    return <Loader />;
  }

  return <Reviews reviewIds={reviewIds} />;
};
