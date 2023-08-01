import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { Restaurant } from "../../components/Restaurant/component";
import { Tabs } from '../../components/Tabs/component'
import { useState } from "react";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  const selectedRestaurantName = restaurants[activeRestaurantIndex].name
  const selectedRestaurantMenu = restaurants[activeRestaurantIndex].menu
  const selectedRestaurantReviews = restaurants[activeRestaurantIndex].reviews

  return (
    <Layout>
      <Tabs
        restaurants={restaurants}
        onTabSelect={setActiveRestaurantIndex} 
      />
      <Restaurant
        selectedRestaurantName={selectedRestaurantName}
        selectedRestaurantMenu={selectedRestaurantMenu}
        selectedRestaurantReviews={selectedRestaurantReviews}
      />
    </Layout>
  );
};
