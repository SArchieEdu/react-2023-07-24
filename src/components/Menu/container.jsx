import { useGetDishesQuery } from "../../store/services/api";
import { Menu } from "./component";

export const MenuContainer = ({ restaurantId }) => {
  const { data, isFetching } = useGetDishesQuery(
    { restaurantId },
    {
      skip: !restaurantId,
    },
  );

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return <Menu dishes={data} />;
};
