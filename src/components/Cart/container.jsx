import { useSelector } from "react-redux";
import { selectCartModule } from "../../store/features/cart/selectors";
import { Cart } from "./component";
import { selectDishesEntities } from "../../store/features/dishes/selectors";

export const CardContainer = () => {
  const cart = useSelector(selectCartModule);
  const dishesEntities = useSelector(selectDishesEntities);

  const cartWithNames = Object.entries(cart).reduce((acc, [id, count]) => {
    acc.push({ id, count, name: dishesEntities[id].name });
    return acc;
  }, []);

  return <Cart cart={cartWithNames} />;
};
