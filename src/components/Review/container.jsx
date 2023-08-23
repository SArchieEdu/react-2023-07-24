import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewsById } from "../../store/features/reviews/selectors";

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewsById(state, reviewId));

  return <Review review={review} />;
};
