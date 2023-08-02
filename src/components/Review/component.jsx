export const Review = ({review}) => {
  return <div>
    <strong>★{review.rating}</strong>
    <span> {review.text}</span>
  </div>
}