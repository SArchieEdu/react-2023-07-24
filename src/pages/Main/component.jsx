import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { Tabs } from "../../components/Tabs/component";
import { useEffect } from "react";
import { Button } from "../../components/Button/component";
import { ThemeContext } from "../../contexts/themeContext";
import {AuthContext} from "../../contexts/authContext";
import {Provider} from "../../custome-redux/provider";
import {store} from "../../store";
import {Cart} from "../../components/Cart/component";
import {Modal} from "../../components/Modal/component";
import {AuthForm} from "../../components/AuthForm/component";

const LOCAL_STORAGE_KEY = "activeRestaurantIndex";

export const MainPage = () => {
  const [theme, setTheme] = useState("light");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Авторизоваться");
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(
    () => localStorage.getItem(LOCAL_STORAGE_KEY) || 0
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, activeRestaurantIndex);
  }, [activeRestaurantIndex]);

  const handleModalOpen = () => {
    if (username === "Авторизоваться") {
      setIsModalOpen(true);
    }
  };

  const handleAuth = ({name}) => {
    setIsLoggedIn(true);
    setUsername(name);
    setIsModalOpen(false);
  };

  const handleUnAuth = () => {
    setIsLoggedIn(false);
    setUsername("Авторизоваться");
  };

  return (
    <Provider store={store}>
      <AuthContext.Provider value={username}>
        <ThemeContext.Provider value={theme}>
          <Layout>
            {isModalOpen && (
              <Modal>
                <AuthForm onClick={handleAuth} />
              </Modal>
            )}
            <div>
              <Button
                disabled={username !== "Авторизоваться"}
                onClick={handleModalOpen}
              >
                {username}
              </Button>
              {isLoggedIn && <Button onClick={handleUnAuth}>Logout</Button>}
            </div>
            <Button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              SwitchTheme
            </Button>
            <Tabs
              restaurants={restaurants}
              onTabSelect={setActiveRestaurantIndex}
            />
            <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
            <Cart />
          </Layout>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Provider>
  );
};
