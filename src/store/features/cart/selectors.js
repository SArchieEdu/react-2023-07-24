export const selectCartModule = (state) => state.cart;

export const selectCartIds = (state) =>
  selectCartModule(state).map(item => item.id);

const getCartItemById = (state, itemId) =>
  selectCartModule(state).find((item) => item.id === itemId)

export const getCartItemQuantityById = (state, itemId) => {
  return getCartItemById(state, itemId)?.quantity || 0;
}
