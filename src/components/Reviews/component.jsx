import { NewReviewForm } from "../NewReviewForm/component";
import {ReviewContainer} from "./container";

export const Reviews = ({reviewIds}) => {
  console.log(reviewIds);
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {!!reviewIds.length &&
          reviewIds.map((id) => <ReviewContainer key={id} reviewId={id} />)}
      </div>
      <NewReviewForm />
    </div>
  );
};
