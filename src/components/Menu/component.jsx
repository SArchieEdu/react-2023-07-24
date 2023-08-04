import "./style.css";
import { Dish } from "../Dish/component";
import { NewDish } from "../NewDish/component";

export const Menu = ({ dishes }) => {
  return (
    <div>
      <div className="menu">
        {dishes.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
      <hr />
      <NewDish />
    </div>
  );
};
