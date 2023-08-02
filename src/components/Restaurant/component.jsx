import { Menu } from '../Menu/component';
import { Reviews } from '../Reviews/component';

export const Restaurant = ({ activeRestaurant }) => {
    return (
        <div>
            <span>{activeRestaurant.name}</span>
            <Menu menu={activeRestaurant.menu} />
            <Reviews reviews={activeRestaurant.reviews} />
        </div>
    );
};
