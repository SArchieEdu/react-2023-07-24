export const Review = ({review, author}) => {
  if (!review) {
    return null;
  }

  return (
    <div>
      <h4>{author.name}</h4>
      <p>{review.text}</p>
    </div>
  );
};
