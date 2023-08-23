export const selectDishesModule = (state) => state.dishes;

export const selectDishById = (state, id) => selectDishesModule(state).entities[id];

export const selectDishesIds = (state) => selectDishesModule(state).ids;

export const selectDishesEntities = (state) => selectDishesModule(state).entities;
