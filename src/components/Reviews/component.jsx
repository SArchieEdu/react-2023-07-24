import Review from "../Review/component";
const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews:</h2>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
