import { Review } from '../Review/component'

export const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => (
        <div key={review.id}>
          <Review text={review.text} />
        </div>
      ))}
    </>
  );
};