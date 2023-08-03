import { Dish } from "../Dish/Component"

export const Menu = ({dishes}) => {
{
  return dishes.map((dish, index) => {
    return (
      <Dish dishEl={dish} key={index}/>
    )
  })
}
}