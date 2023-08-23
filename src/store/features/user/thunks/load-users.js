import {
  failLoadingUsers,
  finishLoadingUsers,
  startLoadingUsers,
} from "../action";
import { selectIsUsersLoaded } from "../selectors.js";

export const loadUsersIfNotExist =
  () => (dispatch, getState) => {
    const state = getState();
    const isLoaded = selectIsUsersLoaded(state);

    if (isLoaded) {
      return;
    }

    dispatch(startLoadingUsers());

    fetch(`http://localhost:3001/api/users`)
      .then((response) => response.json())
      .then((user) => dispatch(finishLoadingUsers(user)))
      .catch(() => dispatch(failLoadingUsers()));
  };
