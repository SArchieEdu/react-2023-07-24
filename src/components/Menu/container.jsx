import { useSelector } from 'react-redux';
import { Menu } from './component';
import { selectRestaurantById } from '../../store/features/restaurant/selectors';

export const MenuContainer = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
    
    return <Menu dishIds={restaurant.menu}/>
}