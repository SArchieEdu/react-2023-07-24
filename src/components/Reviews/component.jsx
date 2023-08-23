import { NewReviewForm } from "../NewReviewForm/component";
import { ReviewContainer } from "../Review/container";

export const Reviews = ({ reviewsIds }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {!!reviewsIds.length && reviewsIds.map((id) => <ReviewContainer key={id} reviewId={id} />)}
      </div>
      <NewReviewForm />
    </div>
  );
};
