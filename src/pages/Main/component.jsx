import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import Tabs from "../../components/Tabs/component";
import Restaurant from "../../components/Restaurant/component";
import { useState } from "react";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  console.log(restaurants)

  return (
    <Layout>
      <div>
        <Tabs restaurants={restaurants} onTablSelect={setActiveRestaurantIndex} />
      </div>
      <div>
        <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
      </div>
    </Layout>
  );
};
