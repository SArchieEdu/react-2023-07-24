import {normalizedReviews} from "../../../../forLessons/normalized-fixtures";

const DEFAULT_STATE = {
    entities: normalizedReviews.reduce((acc, review) => {
        acc[review.id] = review;

        return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsReducer = (state = DEFAULT_STATE, { type } = {}) => {
    switch (type) {
        default:
            return state;
    }
};
