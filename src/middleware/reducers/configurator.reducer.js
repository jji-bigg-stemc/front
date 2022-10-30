const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIDENAV:
      return { ...state, sidenavColor: payload };

    default:
      return state;
  }
};

export const SET_SIDENAV = "SET_SIDENAV";
