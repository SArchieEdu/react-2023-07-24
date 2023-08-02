import { Review } from "../Review/component"

export const Reviews = ({reviews}) => {
  return <div>
    {reviews.map((review) => (
      <Review key={review.id} review={review}/>
    ))}
  </div>
}