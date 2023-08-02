import { Review } from "../Review/component"

export const Reviews = ({ restaurantReviews }) => {
    console.log(restaurantReviews)
    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {restaurantReviews.map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </ul>
        </div>
    )
}
