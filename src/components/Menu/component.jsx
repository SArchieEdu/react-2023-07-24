import { Dish } from "../Dish/component";
import { NewDish } from "../NewDIsh/component.jsx";

export const Menu = ({ dishes }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {dishes.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
      <h3>New Dish</h3>
      <NewDish />
    </div>
  );
};
