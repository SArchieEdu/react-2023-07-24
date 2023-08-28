import { LOADING_STATUS } from "../../../constants/loading-statuses";
import { USER_ACTION } from "./action";

const DEFAULT_STATE = {
  entities: {},
  ids: [],
  status: LOADING_STATUS.idle,
};

export const userReducer = (state = DEFAULT_STATE, { type, payload } = {}) => {
  switch (type) {
    case USER_ACTION.startLoading: {
      return { ...state, status: LOADING_STATUS.loading };
    }
    case USER_ACTION.finishLoading: {
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
    case USER_ACTION.failLoading: {
      return { ...state, status: LOADING_STATUS.failed };
    }
    default:
      return state;
  }
};
