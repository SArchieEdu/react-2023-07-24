import { Button } from "../Button/component.jsx";

export function Tabs({ restaurants, onTabSelect }) {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Button
          key={restaurant.id}
          onClick={() => onTabSelect(index)}
        >
          {restaurant.name}
        </Button>
      ))}
    </div>
  )
}
