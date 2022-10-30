const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Compare this snippet from src\middleware\reducers\user.reducer.js:
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case SET_ID:
      return {
        ...state,
        id: payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case SET_AVATAR:
      return {
        ...state,
        avatar: payload,
      };
    case SET_CONVERSATIONS:
      return {
        ...state,
        conversations: payload,
      };
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: payload,
      };
    // Compare this snippet from src\middleware\reducers\configurator.reducer.js:
    // case SET_SIDENAV:
    //   return {
    //     ...state,
    //     sidenav: payload,
    //   };
    // Compare this snippet from src\middleware\reducers\theme.reducer.js:
    // case SET_THEME:
    //   return {
    //     ...state,
    //     theme: payload,
    //   };
    default:
      return state;
  }
};

export const SET_ID = "SET_ID";
export const SET_TOKEN = "SET_TOKEN";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_NAME = "SET_NAME";
export const SET_AVATAR = "SET_AVATAR";
export const SET_CONVERSATIONS = "SET_CONVERSATIONS";
export const SET_IS_AUTHENTICATED = "SET_IS_AUTHENTICATED";
