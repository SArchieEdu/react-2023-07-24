import { Counter } from '../../components/Counter/component';

export const Dish = ({ dish }) => {
  return (
      <div>
        <div>{dish.name}</div>
        <Counter price={dish.price} />
      </div>
  );

};
