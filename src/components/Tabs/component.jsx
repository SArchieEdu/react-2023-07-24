import { Button } from "../../components/Button/component";

export const Tabs = ({ restaurants, onTabSelect }) => {
  return (
    <>
      {restaurants.map((restaurant, index) => (
      <Button
        key={restaurant.id}
        onClick={() => onTabSelect(index)}
      >
        {restaurant.name}
      </Button>
    ))}
    </>
  );
};