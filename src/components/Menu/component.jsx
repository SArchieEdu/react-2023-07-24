import { Dish } from "../Dish/component"

export const Menu = ({dishList}) => {
    return (
        <div>
            <div>Список блюд:</div>
            { dishList.map((dish) => {
                return <Dish key={dish.id} dish={dish}/>
            }) }
         
        </div>
    )
}