import { useSelector } from 'react-redux';
import { Reviews } from './component';
import { selectRestaurantById } from '../../store/features/restaurant/selectors';

export const ReviewsContainer = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
    return <Reviews reviewsIds={restaurant.reviews}/>
}