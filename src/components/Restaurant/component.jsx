import Menu from "../../components/Menu/component";
import Reviews from "../../components/Reviews/component";

const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};

export default Restaurant;
