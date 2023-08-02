import Menu from "../../components/Menu/component";
import Reviews from "../../components/Reviews/component";

const Restaurant = ({ rest }) => {
  return (
    <div>
      <h1>{rest.name}</h1>
      <Menu menu={rest.menu} />
      <Reviews reviews={rest.reviews} />
    </div>
  );
};

export default Restaurant;
