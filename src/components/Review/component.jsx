export const Review = ({ data }) => {
    return <div className="reviews">
        <h4 className="restaurant__title">{data.user} rating: {data.rating}</h4>
        <p>
            {data.text}
        </p>
    </div>;
};
