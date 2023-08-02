import { restaurants } from "../../constants/constants";
import { Menu } from "../Menu/Component"
import { Rewiews } from "../Rewiews/Component"
export const Restaurant = ({ restaurantName}) => {
  const rests = restaurants.map(restaurant =>{
    return restaurant.menu;
  })
  return (
    <div>
      <div>{restaurantName}</div>
      <Menu restaurantsListMenu = {rests}/>
      <Rewiews/>
    </div>
  )
}