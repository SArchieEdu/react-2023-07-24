import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component.jsx";
import { Tabs } from "../../components/Tabs/component.jsx";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  const activeRestaurant = restaurants[activeRestaurantIndex];

  return (
    <Layout>
      <Tabs restaurants={restaurants} onTabSelect={setActiveRestaurantIndex} />
      <Restaurant restaurant={activeRestaurant} />
    </Layout>
  );
};
