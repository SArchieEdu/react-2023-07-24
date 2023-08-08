import { Dish } from "../Dish/component";
import { NewDish } from '../../components/NewDish/component';

export const Menu = ({ dishes }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {dishes.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
      <div>
          <h3>New Dish</h3>
          <NewDish />
      </div>
    </div>
  );
};
