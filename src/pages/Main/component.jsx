import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/Component";
import { Tabs } from "../../components/Tabs/Component";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  const restaurant = restaurants[activeRestaurantIndex];
  return (
    <Layout>
      <Tabs restaurantsList = {restaurants} activeIndexFunction = {setActiveRestaurantIndex}/>
      <Restaurant reviews = {restaurant.reviews} menu = {restaurant.menu} name = {restaurant.name}/>
    </Layout>
  );
};
