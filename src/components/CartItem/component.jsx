export const CartItem = ({dish, count}) => {
  return (
    <li>
      {dish.name}: {count}
    </li>
  );
};
