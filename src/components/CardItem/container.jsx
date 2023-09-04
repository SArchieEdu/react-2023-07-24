import { DishContainer } from "../Dish/container";
import { useGetDishesQuery } from "../../store/services/api";

export const CardItemContainer = ({ dishId }) => {
  const { data } = useGetDishesQuery({ productId: dishId });

  if (!data) {
    return null;
  }

  return <DishContainer dish={data} />;
};
