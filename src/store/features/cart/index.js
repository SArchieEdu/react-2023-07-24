const DEFAULT_STATE = [];

const addToCart = (cart, itemId) => {
  const cartItem = cart.find((item) => item.id === itemId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({
      id: itemId,
      quantity: 1,
    })
  }
}

const removeFromCart = (cart, itemId) => {
  const cartItem = cart.find((item) => item.id === itemId);

  if (cartItem && cartItem.quantity > 0) {
    cartItem.quantity -= 1;
  }
}


export const cartReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "increment":
      addToCart(state, payload);

      return [...state];
    case "decrement":
      removeFromCart(state, payload);

      return [...state];

    default:
      return state;
  }
};
