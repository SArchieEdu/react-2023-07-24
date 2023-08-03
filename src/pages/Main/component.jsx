import { Layout } from "../../components/Layout/component";
import { Tabs } from "../../components/Tabs/component";
import { Restaurant } from "../../components/Restaurant/component";
import { useState } from "react";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);


    let onTabSelect = (value) => {
        setActiveRestaurantIndex(value);
    }


  return (
    <Layout>

        <Tabs onTabSelect={onTabSelect} ></Tabs>

        <div>
            <Restaurant active={activeRestaurantIndex} />
        </div>

    </Layout>
  );
};
