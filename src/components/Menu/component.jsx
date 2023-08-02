import { Dish } from "../Dish/component"


export const Menu = ({ restaurantMenu }) => {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {restaurantMenu.map(item => (
                    <Dish key={item.id} dish={item} />
                ))}
            </ul>
        </div>
    )
}
