import {normalizedDishes} from "../../../constants/normalized-fixtures";

const DEFAULT_STATE = {
    entities: normalizedDishes.reduce((acc, dishes) => {
        acc[dishes.id] = dishes;

        return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
};

export const dishesReducer = (state = DEFAULT_STATE, { type } = {}) => {
    switch (type) {
        default:
            return state;
    }
};
