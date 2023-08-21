import {selectDishesById} from "../../store/features/dishes/selectors";
import {Menu} from "./component";
import { useSelector } from "react-redux";

export const MenuContainer = ({dishesIds}) => {

  const dishes = useSelector((state) =>
      selectDishesById(state, dishesIds)
  );

  if (dishesIds) {
    return <Menu dishes={dishes} />;
  } else {
    ''
  }
};
