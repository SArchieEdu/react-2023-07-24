import { Button } from "../Button/component";

import styles from "./styles.module.css";

export const Dish = ({ dish, amount, increment, decrement }) => {
  const { price: dishPrice, name } = dish;

  return (
    <div>
      <div>{name}</div>
      <Button
        disabled={amount === 0}
        onClick={decrement}
        type="primary"
        className={styles.decrement}
      >
        -
      </Button>
      <span> {amount} </span>
      <Button disabled={amount === 5} onClick={increment}>
        +
      </Button>
      <div>Total: ${amount * dishPrice}</div>
    </div>
  );
};
