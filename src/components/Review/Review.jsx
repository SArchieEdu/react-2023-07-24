export const Review = ({review}) => {
    return (
        <div>
            <div>- Посетитель: {review.user}</div>
            <div> ___ Отзыв: {review.text}</div>
        </div>
    )
}