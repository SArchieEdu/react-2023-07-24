const DEFAULT_STATE = {
  user: null,
  exp: null,
};

export const AUTH_EXPIRATION_SECONDS_TIME = 60 * 10;

const login = (state, username) => {
  const exp = new Date().getTime() + AUTH_EXPIRATION_SECONDS_TIME * 1000;

  state.user = username;
  state.exp = exp;
}

const logout = (state) => {
  state.user = null;
  state.exp = null;
}

export const authActions = {
  login: "login",
  logout: "logout",
}

export const authReducer = (state = DEFAULT_STATE, { type, payload } = {}) => {
  switch (type) {
    case authActions.login:
      login(state, payload);

      return { ...state }
    case authActions.logout:
      logout(state);

      return { ...state }
    default:
      return state;
  }
};
