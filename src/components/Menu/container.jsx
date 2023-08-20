import { NewDish } from "../NewDish/component";
import { RestaurantDishContainer } from "../RestaurantDish/container.jsx";

export const RestaurantMenu = ({ dishesIds }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {dishesIds.map((id) => (
          <RestaurantDishContainer key={id} dishId={id} />
        ))}
      </div>
      <NewDish />
    </div>
  );
};
