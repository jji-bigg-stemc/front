import axios from "axios";
import { SIGNUP_URL } from "middleware/constants";
import { SIGNIN_URL } from "middleware/constants";

import { SET_EMAIL } from "middleware/reducers/user.reducer";
import { SET_NAME } from "middleware/reducers/user.reducer";
import { SET_CONVERSATIONS } from "middleware/reducers/user.reducer";
import { SET_IS_AUTHENTICATED } from "middleware/reducers/user.reducer";
import { SET_AVATAR } from "middleware/reducers/user.reducer";
import { SET_PASSWORD } from "middleware/reducers/user.reducer";
import { SET_ID } from "middleware/reducers/user.reducer";
import { SET_TOKEN } from "middleware/reducers/user.reducer";

export const signup = (email, password, name) => async (dispatch) => {
  try {
    const response = await axios.post(SIGNUP_URL, { email, password, name });
    const { token, id, email, name, conversations, avatar } = response.data;
    dispatch({ type: SET_TOKEN, payload: token });
    dispatch({ type: SET_ID, payload: id });
    dispatch({ type: SET_EMAIL, payload: email });
    dispatch({ type: SET_NAME, payload: name });
    dispatch({ type: SET_CONVERSATIONS, payload: conversations });
    dispatch({ type: SET_AVATAR, payload: avatar });
    dispatch({ type: SET_IS_AUTHENTICATED, payload: true });
  } catch (e) {
    console.log(e);
  }
};

export const signin = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      SIGNIN_URL,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: SET_TOKEN,
      payload: response.data.token,
    });
    dispatch({
      type: SET_ID,
      payload: response.data.user.id,
    });
    dispatch({
      type: SET_EMAIL,
      payload: response.data.user.email,
    });
    dispatch({
      type: SET_PASSWORD,
      payload: response.data.user.password,
    });
    dispatch({
      type: SET_NAME,
      payload: response.data.user.name,
    });
    dispatch({
      type: SET_AVATAR,
      payload: response.data.user.avatar,
    });
    dispatch({
      type: SET_CONVERSATIONS,
      payload: response.data.user.conversations,
    });
    dispatch({
      type: SET_IS_AUTHENTICATED,
      payload: true,
    });
  } catch (error) {
    console.log(error);
  }
};
