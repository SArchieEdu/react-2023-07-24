import {Reviews} from "./component";
import { useSelector } from "react-redux";
import {selectReviewsById} from "../../store/features/reviews/selectors";

export const ReviewsContainer = ({reviewIds}) => {
  const reviews = useSelector((state) =>
      selectReviewsById(state, reviewIds)
  );
  if (reviewIds) {
    return <Reviews reviews={reviews} />;
  } else {
    ''
  }
};
