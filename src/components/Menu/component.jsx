import {restaurants} from "../../constants/constants";
import {Dish} from "./Dish/component";

export const Menu = ({children, active}) => {

    return (
        <div>
            <div><h2>Menu: </h2></div>

            <div>
                {restaurants[active].menu.map((menu, index) => (

                    <li key={menu.id}>
                        <Dish name={menu.name} price={menu.price} />
                    </li>

                ))}
            </div>

        </div>
    );
};