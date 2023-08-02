import { Button } from "../../components/Button/component";

const Tabs = ({ restList, onTablSelect }) => {
  return (
    <div>
      {restList.map((restaurant, index) => (
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
