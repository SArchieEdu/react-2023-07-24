import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/component";
import { store } from "./store/index.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <MainPage />
  </Provider>
);
