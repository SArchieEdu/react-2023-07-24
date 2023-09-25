import { UserContainer } from "../User/container";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  return (
    <div>
      {review.rating} {review.text}
      <UserContainer userId={review.userId} />
    </div>
  );
};
