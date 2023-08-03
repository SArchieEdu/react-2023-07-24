import { Review } from "../Review/Component"

export const Reviews = ({reviewsList}) => {
  return reviewsList.map((review) => 
    <Review key = {review.id} rating = {review.rating} user = {review.user} comment = {review.text}/>
  )
  
}