import { SET_SIDENAV } from "middleware/reducers/configurator.reducer";

export const sidenav = (value) => (dispatch, getState) => {
  dispatch({
    type: SET_SIDENAV,
    payload: value,
  });
};
