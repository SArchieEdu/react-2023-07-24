export const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(({ id, name, count }) => (
          <li key={id}>
            {name}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};
