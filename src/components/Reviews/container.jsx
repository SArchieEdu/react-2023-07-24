import { RestaurantReviewContainer } from "../RestaurantReview/container.jsx";
import { NewReviewForm } from "../NewReviewForm/component.jsx";

export const RestaurantReviews = ({ reviewsIds }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {reviewsIds.map((id) => (
          <RestaurantReviewContainer
            key={id}
            reviewId={id}
          />
        ))}
      </div>
      <NewReviewForm />
    </div>
  );
};
