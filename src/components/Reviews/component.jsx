import { ReviewContainer } from "../Review/container";
import { NewReviewFormContainer } from "../NewReviewForm/container";

export const Reviews = ({ reviewIds, restaurantId }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {!!reviewIds.length &&
          reviewIds.map((id) => <ReviewContainer key={id} reviewId={id} />)}
      </div>
      <NewReviewFormContainer restaurantId={restaurantId} />
    </div>
  );
};
