import { Menu } from '../Menu/component'
import { Reviews } from '../Reviews/component'

export const Restaurant = ({ selectedRestaurantName, selectedRestaurantMenu, selectedRestaurantReviews }) => {
  return (
    <>
      <div>{selectedRestaurantName}</div>
      <Menu menu={selectedRestaurantMenu}/>
      <Reviews reviews={selectedRestaurantReviews}/>
    </>
  );
};