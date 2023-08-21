export const selectDishesModule = (state) => state.dishes;

export const selectDishesById = (state, ids) => {

    const result =[];

    for (const id of ids) {
        result.push(selectDishesModule(state).entities[id]);
    }
    return result;
}


export const selectDishesIds = (state) => selectDishesModule(state).ids;
