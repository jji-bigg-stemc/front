import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "middleware/logger";
import rootReducer from "middleware/reducers";

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  );

  return store;
}
