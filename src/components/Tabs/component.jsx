import { Button } from "../../components/Button/component";

const Tabs = ({ restaurants, onTablSelect }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Button
          key={restaurant.id}
          onClick={() => onTablSelect(index)}
        >
          {restaurant.name}
        </Button>
      ))}
    </div>
  );
};
export default Tabs;
