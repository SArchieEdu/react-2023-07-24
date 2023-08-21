export const selectDishesModule = (state) => state.reviews;

export const selectReviewsById = (state, ids) => {

    const result =[];

    for (const id of ids) {
        result.push(selectDishesModule(state).entities[id]);
    }
    return result;
}


export const selectReviewsIds = (state) => selectDishesModule(state).ids;
