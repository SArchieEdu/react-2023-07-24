import "./style.css";

export const Dish = ({ dish }) => {
  return (
    <div className="dish">
      <div>
        <h3>Dish</h3>
        <p>Name: {dish.name}</p>
        <p>Price: {dish.price}</p>
      </div>
      <ul>
        <p>Ingredient list</p>
        {dish.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};
