import { NewDish } from "../NewDish/component";
import { DishContainer } from "../Dish/container";

import styles from "./styles.module.css";

export const Menu = ({ dishIds }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div className={styles.dishes}>
        {dishIds.map((id) => (
          <DishContainer key={id} dishId={id} />
        ))}
      </div>
      <NewDish />
    </div>
  );
};
