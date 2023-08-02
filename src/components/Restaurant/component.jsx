import { Menu } from "../Menu/component"
import { restaurants } from "../../constants/constants"
import { Reviews } from "../Reviews/components"

export const Restaurant = ({ activeRestaurantId }) => {
  const activeRestaurant = restaurants.find(item => item.id === activeRestaurantId)

  return (
    <div>
      <h1>{activeRestaurant.name}</h1>
      <Menu restaurantMenu={activeRestaurant.menu} />
      <Reviews restaurantReviews={activeRestaurant.reviews} />
    </div>
  )
}
