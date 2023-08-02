import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import Tabs from "../../components/Tabs/component";
import Restaurant from "../../components/Restaurant/component";
import { useState } from "react";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <Layout>
      <div>
        <Tabs restList={restaurants} onTablSelect={setActiveRestaurantIndex} />
      </div>
      <div>
        <Restaurant rest={restaurants[activeRestaurantIndex]} />
      </div>
    </Layout>
  );
};
