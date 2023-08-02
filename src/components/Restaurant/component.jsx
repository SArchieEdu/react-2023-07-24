import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";

export const Restaurant = ({restaurant}) => {
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <Menu dishes={restaurant.menu}/>
      <br/>
      <Reviews reviews={restaurant.reviews}/>
    </div>
  );
}