import {useSelector, useDispatch} from "react-redux";
import {Reviews} from "./component";
import {selectRestaurantReviewsById} from "../../store/features/restaurant/selectors";
import {loadReviewsByRestaurantIfNotExist} from "../../store/features/review/thunks/load-reviews-by-restaurant";
import {selectIsReviewLoading} from "../../store/features/review/selectors";
import {useEffect} from "react";
import {addNewReview} from "../../store/features/review/thunks/add-new-review";

export const ReviewsContainer = ({restaurantId}) => {
  const isLoading = useSelector(selectIsReviewLoading);
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewsByRestaurantIfNotExist(restaurantId));
  }, [dispatch, restaurantId]);

  const handleAddNewReview = (evt, form) => {
    evt.preventDefault();
    dispatch(addNewReview(restaurantId, {...form}));
    dispatch(loadReviewsByRestaurantIfNotExist(restaurantId));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Reviews
      reviewIds={reviewIds}
      restaurantId={restaurantId}
      onSubmit={handleAddNewReview}
    />
  );
};
