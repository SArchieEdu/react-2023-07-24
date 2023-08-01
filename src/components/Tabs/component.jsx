import { Button } from '../../components/Button/component';

export const Tabs = ({ restaurants, onTabSelect }) => {
  const handleClick = (index) => {
    if (onTabSelect) {
      onTabSelect(index);
    }
  };

  return (
    <div>
      {restaurants &&
        restaurants.map((restaurant, index) => (
          <Button key={restaurant.id} onClick={() => handleClick(index)}>
            {restaurant.name}
          </Button>
        ))}
    </div>
  );
};
