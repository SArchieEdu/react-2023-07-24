import { LOADING_STATUS } from "../../../constants/loading-statuses.js";

export const selectUserModule = (state) => state.user;

export const selectUserById = (state, id) =>
  selectUserModule(state).entities[id];

export const selectUserIds = (state) => selectUserModule(state).ids;

export const selectUsersLoadingStatus = (state) =>
  selectUserModule(state).status;

export const selectIsUsersLoading = (state) =>
  selectUsersLoadingStatus(state) === LOADING_STATUS.loading;

export const selectIsUsersLoaded = (state) =>
  selectUsersLoadingStatus(state) === LOADING_STATUS.finished;

export const selectIsUsersLoadingFailed = (state) =>
  selectUsersLoadingStatus(state) === LOADING_STATUS.failed;
