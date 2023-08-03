
import { Menu } from "../Menu/Component"
import { Reviews } from "../Reviews/Component"
export const Restaurant = ({name, menu, reviews}) => {
  console.log(reviews);
  return (
    <div>
      <div>{name}</div>
      <Menu dishes = {menu}/>
      <Reviews reviewsList = {reviews}/>
    </div>
  )
}