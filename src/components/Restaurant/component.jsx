import { Menu } from './../Menu/component';
import { Reviews } from './../Reviews/component';
export const Restaurant = ({activeRestaurant}) => {

    return (
        <>
            <div className="restaurantName">
                Название ресторана: {activeRestaurant.name}
            </div>
            <Menu dishList={activeRestaurant.menu}/>
            <Reviews reviewsList={activeRestaurant.reviews}/>
        </>
 
    )
}