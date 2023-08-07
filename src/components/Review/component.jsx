const Review = ({ review }) => {
  return (
    <p>
      <h3>Review:</h3>
      <p>User:</p>
      <p>{review.user}</p>
      <p>Text:</p>
      <p>{review.text}</p>
      <p>Rating:</p>
      <p>{review.rating}</p>
    </p>
  );
};

export default Review;
