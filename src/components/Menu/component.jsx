import { NewDish } from "../NewDish/component";
import { DishContainer } from './../Dish/container';

export const Menu = ({ dishIds }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {dishIds.map((dishId) => (
          <DishContainer key={dishId} dishId={dishId}/>
        ))}
      </div>
      <NewDish />
    </div>
  );
};
