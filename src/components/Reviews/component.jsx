import { Review } from "../Review/component.jsx";

export function Reviews({ reviews }) {
  const reviewsStyle = {
    margin: "15px 0",
  }

  return (
    <div style={reviewsStyle}>
      {reviews.map(review => (
        <Review {...review} key={review.id} />
      ))}
    </div>
  );
}
