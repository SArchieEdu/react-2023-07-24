import {CartItemContainer} from "../CartItem/container";

export const Cart = ({cart}) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {Object.entries(cart).map(([id, count]) => (
          <CartItemContainer key={id} dishId={id} count={count} />
        ))}
      </ul>
    </div>
  );
};
