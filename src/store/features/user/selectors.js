import {LOADING_STATUS} from "../../../constants/loading-statuses";

export const selectUserModule = (state) => state.user;

export const selectUserById = (state, id) =>
  selectUserModule(state).entities[id];

export const selectUserIds = (state) => selectUserModule(state).ids;

export const selectUserLoadingStatus = (state) =>
  selectUserModule(state).status;

export const selectIsUserLoading = (state) => {
  return selectUserModule(state) === LOADING_STATUS.loading;
};

export const selectIsUserLoadingFailed = (state) =>
  selectUserModule(state) === LOADING_STATUS.failed;
