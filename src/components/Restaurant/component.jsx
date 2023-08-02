import { Menu } from "../Menu/component.jsx";
import { Reviews } from "../Reviews/component.jsx";

export function Restaurant({ restaurant }) {
  return (
    <>
      <h2>{restaurant.name}</h2>

      <div><strong>Menu:</strong></div>
      <Menu items={restaurant.menu} />

      <div><strong>Reviews:</strong></div>
      <Reviews reviews={restaurant.reviews} />
    </>
  )
}
