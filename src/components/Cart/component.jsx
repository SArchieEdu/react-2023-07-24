import { RestaurantCartItemContainer } from "../RestaurantCartItem/container.jsx";

export const Cart = ({ items }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map((id) => (
          <RestaurantCartItemContainer key={id} itemId={id} />
        ))}
      </ul>
    </div>
  );
};
