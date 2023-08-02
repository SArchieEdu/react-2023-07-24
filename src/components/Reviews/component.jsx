import { Review } from './../Review/Review';
export const Reviews = ({reviewsList}) => {

    return (
        <div>
            <div>Список отзывов:</div>
            {reviewsList.map((review) => <Review review={review}  key={review.id}/>)}
        </div>
    )
}