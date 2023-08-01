import { Menu } from '../Menu/component';
import { Reviews } from '../Reviews/component';

export const Restaurant = ({ restaurant }) => (
  <div>
    {restaurant.name && <h1>{restaurant.name}</h1>}
    <hr />
    {restaurant.menu && <Menu menu={restaurant.menu} />}
    <hr />
    {restaurant.reviews && <Reviews reviews={restaurant.reviews} />}
  </div>
);
