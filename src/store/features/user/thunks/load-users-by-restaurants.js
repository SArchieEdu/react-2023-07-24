import {
  failLoadingUsers,
  finishLoadingUsers,
  startLoadingUsers,
} from "../action";

export const loadUsersByRestaurants = () => (dispatch, getState) => {
  const state = getState();
  if (state.user.updated === false) {
    return;
  }

  dispatch(startLoadingUsers());

  fetch("http://localhost:3001/api/users")
    .then((response) => response.json())
    .then((users) => dispatch(finishLoadingUsers(users)))
    .catch(() => dispatch(failLoadingUsers()));
};
