import { Layout } from "../../components/Layout/component";
import { Restaurant } from "../../components/Restaurant/component";
import { Tabs } from "../../components/Tabs/component";
import { restaurants } from "../../constants/constants";
import { useState } from "react";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <Layout>
      <Tabs
        restaurants={restaurants}
        onClick={index => setActiveRestaurantIndex(index)}
      />
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </Layout>
  );
};
