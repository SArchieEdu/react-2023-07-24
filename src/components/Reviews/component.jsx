import { Review } from "../Review/component";
import "./style.css";

export const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <h3>Review</h3>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};
