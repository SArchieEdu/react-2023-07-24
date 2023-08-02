import { MenuItem } from '../MenuItem/component';

export const MenuList = ({ menu }) => {
  return (
      <div>
          <span>Menu</span>
          <ul>
              {menu && menu.map((menuItem) => (
                  <MenuItem
                      key={menuItem.id}
                      title={menuItem.name}
                  />
              ))}
          </ul>
      </div>
  );
};
