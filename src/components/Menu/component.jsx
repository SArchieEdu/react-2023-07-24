import {Dish} from "../Dish/component.jsx";

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <div>
                {menu.map((dish) => (
                    <Dish dish={ dish }></Dish>
                ))}
            </div>
        </div>
    );
};