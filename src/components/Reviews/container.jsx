import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { selectRestaurantReviewsById } from "../../store/features/restaurant/selectors";
import { loadReviews } from "../../store/features/reviews/thunks/load-reviews";
import { useEffect } from "react";
import { selectIsReviewsLoading } from "../../store/features/reviews/selectors";
import { loadUsers } from "../../store/features/user/thunks/load-users";
import { selectIsUserLoading } from "../../store/features/user/selectors";

export const ReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) => selectRestaurantReviewsById(state, restaurantId));
  const isReviewsLoading = useSelector(selectIsReviewsLoading);
  const isUserLoading = useSelector(selectIsUserLoading);

  useEffect(() => {
    dispatch(loadReviews(restaurantId));
    dispatch(loadUsers());
  }, [dispatch, restaurantId]);

  if (isReviewsLoading || isUserLoading) {
    return <div>Loading...</div>;
  }

  return <Reviews restaurantId={restaurantId} reviewIds={reviewIds} />;
};
