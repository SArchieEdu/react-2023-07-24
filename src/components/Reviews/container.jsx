import {selectReviewById} from "../../store/features/review/selectors";
import {selectUserById} from "../../store/features/users/selectors";
import {Review} from "../Review/component";
import {useSelector} from "react-redux";

export const ReviewContainer = ({reviewId, ...props}) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const author = useSelector((state) => selectUserById(state, review.userId));

  return <Review review={review} author={author} {...props} />;
};
