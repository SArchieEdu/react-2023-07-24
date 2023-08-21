import { ThemeContext } from "../../contexts/themeContext";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import {MenuContainer} from "../Menu/container";
import {ReviewsContainer} from "../Reviews/container";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <ThemeContext.Provider value="green">
          <MenuContainer dishesIds={restaurant.menu} />
      </ThemeContext.Provider>
      <ReviewsContainer reviewIds={restaurant.reviews} />
    </div>
  );
};
