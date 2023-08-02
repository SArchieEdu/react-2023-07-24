import { Dish } from '../Dish/component';

export const Menu = ({ menu }) => {
    return (
        <div>
            <span>Menu</span>
            <ul>
                {menu && menu.map((menuItem) => (
                    <Dish
                        key={menuItem.id}
                        title={menuItem.name}
                    />
                ))}
            </ul>
        </div>
    );
};
