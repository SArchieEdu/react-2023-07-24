export const Review = ({ review }) => {
  return (
    <>
      <div>
        <span>Name: {review.user}</span> /{" "}
        <span>Rating: {review.rating}</span>
      </div>
      <p>Text: {review.text}</p>
    </>
  );
};
