import { Button } from "../Button/component";

export const Dish = ({ dish, count, decrement, increment, disabled }) => {
  const { price: dishPrice, name } = dish || {};

  return (
    <div>
      <div>{name}</div>
      <Button disabled={disabled || count === 0} onClick={decrement}>
        -
      </Button>
      <span> {count} </span>
      <Button disabled={disabled || count === 5} onClick={increment}>
        +
      </Button>
      <div>Total: ${count * dishPrice}</div>
    </div>
  );
};
