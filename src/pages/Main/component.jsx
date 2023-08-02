import { useState } from "react";

import { Layout } from '../../components/Layout/component';
import { Tabs } from '../../components/Tabs/component';
import { Restaurant } from '../../components/Restaurant/component';
import { restaurants } from '../../constants/constants';

export const MainPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <Layout>
            <div>
                <Tabs restaurants={restaurants} onTabSelect={(index) => setActiveRestaurantIndex(index)} />
            </div>
            <div>
                <Restaurant activeRestaurant={restaurants[activeRestaurantIndex]} />
            </div>
        </Layout>
    );
};
