import {restaurants} from "../../constants/constants";
import {Review} from "./Review/component";

export const Reviews = ({children, active}) => {

    return (
        <div>
            <div><h2>Reviews:</h2></div>

            <div>
                {restaurants[active].reviews.map((review, index) => (

                    <div key={review.id}>
                        <Review name={review.user} text={review.text} />
                    </div>
                ))}
            </div>
        </div>
    );
};