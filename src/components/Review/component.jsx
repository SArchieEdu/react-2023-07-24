export const Review = ({ review }) => {
    const { text, user, rating } = review;
    return (
        <div>
            <h5>{ user }</h5>
            <h4>{ text }</h4>
            <h4>rating: { rating }</h4>
        </div>
    );
};