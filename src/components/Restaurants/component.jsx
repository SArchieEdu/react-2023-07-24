import { useState } from "react";
import { RestaurantTabsContainer } from "../Tabs/container";
import { RestaurantContainer } from "../Restaurant/container";
import { Cart } from "../Cart/component";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  return (
    <>
      <RestaurantTabsContainer onTabSelect={setActiveRestaurantId} />
      <RestaurantContainer restaurantId={activeRestaurantId} />
      <Cart></Cart>
    </>
  );
};
