import { Dish } from "../Dish/component.jsx";

export function Menu({ items }) {
  const menuStyle = {
    margin: "15px 0",
  }

  return (
    <div style={menuStyle}>
      {items.map(dish => (
        <Dish {...dish} key={dish.id}/>
      ))}
    </div>
  )
}
