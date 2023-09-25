import { RestaurantTabContainer } from "../Tab/container";

export const Tabs = ({ restaurantIds, onTabSelect }) => {
  return (
    <div>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer key={id} restaurantId={id} onTabSelect={() => onTabSelect(id)}/>
      ))}
    </div>
  );
};
