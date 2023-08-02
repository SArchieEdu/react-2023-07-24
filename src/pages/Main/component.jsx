import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
// import { Button } from "../../components/Button/component";
import { Tabs } from "../../components/Tubs/component";
import { Restaurant } from "../../components/Restaurant/component";
import { useState } from "react";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <Layout>
      <Tabs restaurants={restaurants} onTabSelect={setActiveRestaurantIndex}/>
      <Restaurant activeRestaurant={restaurants[activeRestaurantIndex]} />  
    </Layout>
  );
};
