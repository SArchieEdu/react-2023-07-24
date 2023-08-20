import {RestaurantDishContainer} from "../Dishes/container";
import {NewDish} from "../NewDish/component";

export const Menu = ({dishes}) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {dishes.map((dishId) => (
          <RestaurantDishContainer key={dishId} dishId={dishId} />
        ))}
      </div>
      <NewDish />
    </div>
  );
};
