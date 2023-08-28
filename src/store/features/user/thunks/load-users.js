import { startLoadingUsers, finishLoadingUsers, failLoadingUsers } from "../action";
import { selectIsUserFinished } from "../selectors";

export const loadUsers = () => async (dispatch, getState) => {
  const isFinished = selectIsUserFinished(getState());

  if (isFinished) {
    return;
  }

  dispatch(startLoadingUsers);

  try {
    const response = await fetch("http://localhost:3001/api/users");
    const data = await response.json();
    dispatch(finishLoadingUsers(data));
  } catch (error) {
    failLoadingUsers(error);
  }
};
