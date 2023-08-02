import { Button } from "../../components/Button/component";

export const Tabs = ({activeIndexFunction, restaurantsList}) => {

  return (
    <div>
        {restaurantsList.map((restaurant, index) => (
          <Button
            key={restaurant.id}
            onClick={() => activeIndexFunction(index)}
          >
            {restaurant.name}
          </Button>
        ))}
      </div>
  )
}