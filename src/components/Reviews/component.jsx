import { NewReviewForm } from "../NewReviewForm/component";
import { ReviewContainer } from "../Review/container";

export const Reviews = ({reviewIds, restaurantId, onSubmit}) => {
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {!!reviewIds.length &&
          reviewIds.map((reviewId) => (
            <ReviewContainer key={reviewId} reviewId={reviewId} />
          ))}
      </div>
      <NewReviewForm restaurantId={restaurantId} onSubmit={onSubmit} />
    </div>
  );
};
