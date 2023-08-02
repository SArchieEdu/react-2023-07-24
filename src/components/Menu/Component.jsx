import { Dish } from "../Dish/Component"

export const Menu = ({restaurantsList}) => {
{
  restaurantsList.map((dish, index) => {
    return (
      <Dish dishEl={dish} key={index}/>
    )
  })
}
}