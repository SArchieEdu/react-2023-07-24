const DEFAULT_STATE = {
  currentUser: null,
  loginTime: null,
};

export const authReducer = (state = DEFAULT_STATE, {type, payload} = {}) => {
  switch (type) {
    case "login":
      return {...state, currentUser: payload, loginTime: new Date()};
    case "logout":
      return {...state, currentUser: null};
    default:
      return state;
  }
};
