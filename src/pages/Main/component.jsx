import { Layout } from "../../components/Layout/component";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../../components/Button/component";
import { ThemeContext } from "../../contexts/themeContext";
import { RestaurantTabsContainer } from "../../components/Tabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../store/features/restaurant/selectors.js";
import { RestaurantCartContainer } from "../../components/Cart/container.jsx";

const LOCAL_STORAGE_KEY = "activeRestaurantIndex";

export const MainPage = () => {
  const [theme, setTheme] = useState("light");
  const defaultRestaurantId = useSelector(state => selectRestaurantIds(state)[0])
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    () => localStorage.getItem(LOCAL_STORAGE_KEY) || defaultRestaurantId
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, activeRestaurantId);
  }, [activeRestaurantId]);

  return (
    <ThemeContext.Provider value={theme}>
      <Layout>
        <Button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          SwitchTheme
        </Button>
        <RestaurantTabsContainer onTabSelect={setActiveRestaurantId} />
        <RestaurantContainer restaurantId={activeRestaurantId} />
        <RestaurantCartContainer />
      </Layout>
    </ThemeContext.Provider>
  );
};
