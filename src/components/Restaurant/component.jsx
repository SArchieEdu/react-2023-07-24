import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import "./style.css";

export const Restaurant = ({ restaurant }) => {
  const { menu, name, reviews } = restaurant;

  return (
    <div className="restaurant">
      <div className="restaurant__name">
        <h2>{name}</h2>
      </div>

      <Menu dishes={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
