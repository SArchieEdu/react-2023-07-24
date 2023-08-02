import { ReviewItem } from '../ReviewItem/component';

export const ReviewsList = ({ reviews }) => {
  return (
      <div>
          <span>Review</span>
          <ul>
              {reviews && reviews.map((reviewItem) => (
                  <ReviewItem
                      key={reviewItem.id}
                      review={reviewItem}
                  />
              ))}
          </ul>
      </div>
  );
};
