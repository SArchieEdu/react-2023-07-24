import { Button } from "../../components/Button/component";

export const Tabs = ({ restaurants, onClick }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Button key={restaurant.id} onClick={() => onClick(index)}>
          {restaurant.name}
        </Button>
      ))}
    </div>
  );
};
