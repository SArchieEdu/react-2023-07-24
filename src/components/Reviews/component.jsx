import { Review } from '../Review/component';

export const Reviews = ({ reviews }) => (
  <div>
    <h2>Reviews</h2>
    {reviews &&
      reviews.map(({ id, user, text, rating }) => (
        <Review key={id} user={user} text={text} rating={rating} />
      ))}
  </div>
);
