export const Dish = ({ name, price }) => (
  <div>
    {name && <h3>name: {name}</h3>}
    {price && <p>price: {price}</p>}
  </div>
);
