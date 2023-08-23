export const selectCartModule = (state) => state.cart;

export const selectCartById = (state, id) => selectCartModule(state)?.[id];
