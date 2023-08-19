import { useSelector } from "../../custome-redux";

export const Cart = () => {
  const cart = useSelector((state) => state.dishes);
 
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart && Object.entries(cart).map(([name, count]) => (
          <li key={name}>
            {name}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};
