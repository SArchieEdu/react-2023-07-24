import { LOADING_STATUS } from "../../../constants/loading-statuses";
import { REVIEWS_ACTION } from "./action";

const DEFAULT_STATE = {
  entities: {},
  ids: [],
  status: LOADING_STATUS.idle,
};

export const reviewsReducer = (state = DEFAULT_STATE, { type, payload } = {}) => {
  switch (type) {
    case REVIEWS_ACTION.startLoading: {
      return { ...state, status: LOADING_STATUS.loading };
    }
    case REVIEWS_ACTION.finishLoading: {
      return {
        ...state,
        status: LOADING_STATUS.finished,
        entities: payload.reduce(
          (acc, review) => {
            acc[review.id] = review;

            return acc;
          },
          { ...state.entities },
        ),
        ids: Array.from(new Set([...payload.map(({ id }) => id), ...state.ids])),
      };
    }
    case REVIEWS_ACTION.failLoading: {
      return { ...state, status: LOADING_STATUS.failed };
    }
    case REVIEWS_ACTION.addReview: {
      console.log({
        ...state,
        entities: { ...state.entities, [payload.id]: payload },
        ids: Array.from(new Set([...state.ids, payload.id])),
      });

      return {
        ...state,
        entities: { ...state.entities, [payload.id]: payload },
        ids: Array.from(new Set([...state.ids, payload.id])),
      };
    }
    default:
      return state;
  }
};
