import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { Tabs } from "../../components/Tabs/component";

export const MainPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

  const handleRestSelect = (restId) => {
    setActiveRestaurantId(restId)
  }

  return (
    <Layout>
      <Tabs restaurants={restaurants} onTabSelect={handleRestSelect} />
      <div>
        <Restaurant activeRestaurantId={activeRestaurantId} />
      </div>
    </Layout>
  );
};
