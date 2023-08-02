export const Dish = ({dish}) => {
  return <div>    
    <strong>{dish.name}</strong>
    <span> ({dish.ingredients.join(', ')})</span>
  </div>
}