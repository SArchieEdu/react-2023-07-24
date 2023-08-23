import { DishContainer } from "../Dish/container";
import { NewDish } from "../NewDish/component";

export const Menu = ({ dishesIds }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {dishesIds.map((id) => (
          <DishContainer key={id} dishId={id} />
        ))}
      </div>
      <NewDish />
    </div>
  );
};
