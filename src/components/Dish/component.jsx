const Dish = ({ item }) => {
  const itemOptions = Object.keys(item);
  return (
    <p>
      <h3>Dish:</h3>
      {itemOptions.map(
        (option) =>
          option !== "id" && (
            <p key={option}>
              {option}:{" "}
              {item[option] instanceof Array
                ? item[option].join(", ")
                : item[option]}
            </p>
          )
      )}
    </p>
  );
};

export default Dish;
