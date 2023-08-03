import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { Button } from "../../components/Button/component";
import { useState } from "react";
import {Restaurant} from "../../components/Restaurant/component";
import {Tabs} from "../../components/Tabs/component.jsx";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <Layout>
      <div>
        <Tabs
            restaurants={ restaurants }
            onTabSelect={(index) => setActiveRestaurantIndex(index)}
        />
      </div>
        <div>
            <Restaurant restaurant={restaurants[activeRestaurantIndex]}/>
        </div>
    </Layout>
  );
};
