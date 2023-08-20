export const authenticated = (store) => (next) => (action) => {
  if (action.type === "increment" || action.type === "decrement") {
    const {loginTime} = store.getState().auth;
    const isLoggedInFalse =
      new Date().getTime() - Date.parse(loginTime) > 600000;
    if (isLoggedInFalse) {
      console.log("Ваша сессия истекла");
    }
  }
  return next(action);
};
