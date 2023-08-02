import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { Restaurant } from "../../components/Restaurant/component";
import { useState } from "react";
import { Tabs } from "../../components/Tabs/component";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <Layout>
      <Tabs 
        restaurants={restaurants}
        onTabSelect={(index) => setActiveRestaurantIndex(index)}
      />
      <Restaurant restaurant={restaurants[activeRestaurantIndex]}/>
    </Layout>
  );
};
