import {Review} from "../Review/component";

export const Reviews = ( {reviews} ) => {
    return (
        <div>
            <h3>Reviews</h3>
            <div>
                {reviews.map((review) => (
                    <Review review={ review }></Review>
                ))}
            </div>
        </div>
    );
};