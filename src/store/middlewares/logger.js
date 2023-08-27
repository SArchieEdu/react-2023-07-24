export const loggerMiddleware = (store) => (next) => (action) => {
  console.log('store', store.getState());
  console.log(action);

  next(action);
};
