export const Dish = ({ data }) => {
    return <div className="restaurant">
        <h5 className="restaurant__title">{data.name}</h5>
        <h6>
            Ingredients:
        </h6>
        <ul>
            {
                data.ingredients.map((item, i) => (
                    <li key={i}>{item}</li>
                ))
            }
        </ul>
    </div>;
};
