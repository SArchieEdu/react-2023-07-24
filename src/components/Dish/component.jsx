export const Dish = ({ dish }) => {
    return (
        <div>
            <h4>{dish.name}</h4>
            <ul>
                {dish.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}
