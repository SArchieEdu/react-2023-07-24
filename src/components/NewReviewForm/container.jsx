import { useDispatch } from "react-redux";
import { NewReviewForm } from "./component";
import { createReview as createReviewThunk } from "../../store/features/review/thunks.js/create-review";
import { REQUEST_ID } from "../../store/features/request/constants";

export const NewReviewFormContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const createReview = (newReview) => {
    dispatch(createReviewThunk({ restaurantId, newReview }));
  };
  return <NewReviewForm onSaveForm={createReview}></NewReviewForm>;
};
