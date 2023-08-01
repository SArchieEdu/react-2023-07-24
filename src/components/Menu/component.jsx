import { Dish } from '../Dish/component';

export const Menu = ({ menu }) => (
  <div>
    <h2>Menu</h2>
    {menu && menu.map(({ id, name, price }) => <Dish key={id} name={name} price={price} />)}
  </div>
);
