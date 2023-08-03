export const Dish = ({ dish }) => {
    const { name, price, ingredients } = dish;
    return (
        <div>
        <h4>{name}</h4>
        <h5>{price} $</h5>
            <div>
                ingridients:
                {ingredients.map((ingredient) => (
                    <div>{ ingredient }</div>
                ))}
            </div>
        </div>
    );
};