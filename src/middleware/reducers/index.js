import { combineReducers } from "redux";

import todos from "./todos.reducer";
import events from "./events.reducer";
import configurator from "./configurator.reducer";

export default combineReducers({
  // ...reducers
  todos,
  events,
  configurator,
});
