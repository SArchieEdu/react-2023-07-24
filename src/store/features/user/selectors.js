import { LOADING_STATUS } from "../../../constants/loading-statuses";

export const selectUserModule = (state) => state.user;

export const selectUserById = (state, id) => selectUserModule(state).entities[id];

export const selectUserIds = (state) => selectUserModule(state).ids;

export const selectUserLoadingStatus = (state) => selectUserModule(state).status;

export const selectIsUserLoading = (state) =>
  selectUserLoadingStatus(state) === LOADING_STATUS.loading;

export const selectIsUserFinished = (state) =>
  selectUserLoadingStatus(state) === LOADING_STATUS.finished;
