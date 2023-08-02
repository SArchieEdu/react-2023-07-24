import { Dish } from "../Dish/component";

export const Menu = ({dishes}) => {
  return <div>
      {dishes.map((dish) => (
          <Dish key={dish.id} dish={dish}/>
        ))}
  </div>
}