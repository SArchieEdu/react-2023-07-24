const TEN_MINUTES = 10 * 60 * 1000;
const TOKEN = "token";
const LOGIN = "login";

const DEFAULT_STATE = {
  isLoggedIn: (() => {
    const token = window.localStorage.getItem(TOKEN);
    const duration = Date.now() - token;

    if (duration > TEN_MINUTES) {
      localStorage.removeItem(TOKEN);
      localStorage.removeItem(LOGIN);

      return false;
    }

    return Boolean(token);
  })(),
  login: window.localStorage.getItem(LOGIN),
  token: window.localStorage.getItem(TOKEN),
};

export const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action?.type) {
    case "login": {
      localStorage.setItem(TOKEN, new Date().getTime());
      localStorage.setItem(LOGIN, action?.payload);

      return {
        ...state,
        isLoggedIn: true,
        login: action?.payload,
      };
    }
    case "logout": {
      localStorage.removeItem(TOKEN);
      localStorage.removeItem(LOGIN);

      return {
        ...state,
        isLoggedIn: false,
        login: "",
        token: "",
      };
    }
    default:
      return state;
  }
};
