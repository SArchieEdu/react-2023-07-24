import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { Tabs } from "../../components/Tabs/component";
import { useEffect } from "react";
import {NewDish} from "../../components/NewDish/component";

const LOCAL_STORAGE_KEY = "activeRestaurantIndex";

export const MainPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(
    () => localStorage.getItem(LOCAL_STORAGE_KEY) || 0
    );

    const [activeRestaurantsMenu, updateMenu] = useState(
        restaurants[activeRestaurantIndex].menu
    );

    useEffect(() => {
    updateMenu(restaurants[activeRestaurantIndex].menu);
    }, [activeRestaurantIndex]);

    return (
    <Layout>
      <Tabs restaurants={restaurants} onTabSelect={setActiveRestaurantIndex} />
      <NewDish menu={activeRestaurantsMenu} setDish={updateMenu}/>
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </Layout>
    );
};
