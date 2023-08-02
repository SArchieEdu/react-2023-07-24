import { Button } from "../Button/component"

export const Tabs = ({ restaurants, onTabSelect }) => {
    return (
        <div>
            {restaurants.map((restaurant) => (
                <Button
                    key={restaurant.id}
                    onClick={() => onTabSelect(restaurant.id)}
                >
                    {restaurant.name}
                </Button>
            ))}
        </div>
    )
}
