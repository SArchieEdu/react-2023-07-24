const Dish = ({ dish }) => {
  return (
    <p>
      <h3>Dish:</h3>
      <p>Name:</p>
      <p>{dish.name}</p>
      <p>Price:</p>
      <p>{dish.price}</p>
      <p>ingredients:</p>
      <p>{dish.ingredients.join(', ')}</p>
    </p>
  );
};

export default Dish;
