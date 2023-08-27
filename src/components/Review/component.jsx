import { UserContainer } from './../User/container';

export const Review = ({ review }) => {

  if (!review) {
    return null;
  }
  return (
    <>
      <UserContainer userId={review.userId} />
      <div>{review.text}</div>
    </>
  );
};
