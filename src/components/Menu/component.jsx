import { Dish } from '../Dish/component'

export const Menu = ({ menu }) => {
  return (
    <>
      {menu.map((ingredient) => (
        <div key={ingredient.id}>
          <Dish name={ingredient.name}/>
        </div>
      ))}
    </>
  );
};