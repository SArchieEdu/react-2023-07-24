import { CardItemContainer } from "../CardItem/container";

export const Cart = ({ dishIds }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {dishIds.map((dishId) => (
          <CardItemContainer key={dishId} dishId={dishId} />
        ))}
      </ul>
    </div>
  );
};
