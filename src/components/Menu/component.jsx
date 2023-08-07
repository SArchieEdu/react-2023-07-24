import Dish from "../../components/Dish/component";
const Menu = ({ menu }) => {
  return (
    <div>
      <h2>Menu:</h2>
      {menu.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default Menu;
