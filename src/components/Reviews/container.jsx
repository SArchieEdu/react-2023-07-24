import { selectRestaurantReviewsById } from "../../store/features/restaurants/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { useEffect, useRef } from "react";
import { loadReviewsByRestaurantIfNotExist } from "../../store/features/review/thunks.js/load-reviews-by-restaurant";
import { selectIsReviewLoading } from "../../store/features/review/selectors";
import { loadUsersIfNotExist } from "../../store/features/user/thunks/load-users";
import { selectRequestStatus } from "../../store/features/request/selectors";

export const ReviewsContainer = ({ restaurantId }) => {
  const requestRef = useRef();

  const isLoading = useSelector(selectIsReviewLoading);
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const status = useSelector((state) =>
    selectRequestStatus(state, requestRef.current)
  );

  console.log(status);

  const dispatch = useDispatch();

  useEffect(() => {
    requestRef.current = dispatch(
      loadReviewsByRestaurantIfNotExist(restaurantId)
    ).requestId;

    // return () => {
    //   requestRef.current.abort();
    // };
  }, [dispatch, restaurantId]);

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <Reviews reviewIds={reviewIds} restaurantId={restaurantId} />;
};
