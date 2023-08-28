import { useDispatch } from "react-redux";

import { createReview } from "../../store/features/reviews/thunks/create-review";

import { NewReviewForm } from "./component";

export const NewReviewFormContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(createReview(restaurantId, { ...values }));
  };

  return <NewReviewForm onSubmit={handleSubmit} />;
};
