import { useSelector } from "react-redux";
import { Review } from "../Review/component.jsx";
import { selectReviewById } from "../../store/features/review/selectors.js";
import { selectUserById } from "../../store/features/user/selectors.js";

export const RestaurantReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) =>
    selectReviewById(state, reviewId)
  );

  const reviewUser = useSelector((state) =>
    selectUserById(state, review.userId)
  );

  return <Review
    text={review.text}
    authorName={reviewUser.name}
  />;
};
