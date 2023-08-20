import DishContainer from "./container";

export const Dishes = ({dishesIds, onDishClick}) => {
  return (
    <div>
      {dishesIds.map((id) => (
        <DishContainer
          key={id}
          dishId={id}
          onDishClick={() => onDishClick(id)}
        />
      ))}
    </div>
  );
};
