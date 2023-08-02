import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";

import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/Component";
import { Tabs } from "../../components/Tabs/Component";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  return (
    <Layout>
      <Tabs restaurantsList = {restaurants} activeIndexFunction = {setActiveRestaurantIndex}/>
      <Restaurant restaurantsList = {restaurants} restaurantName = {restaurants[activeRestaurantIndex].name}/>
    </Layout>
  );
};
