const { default: todosSample } = require("dev/sample/todos.sample");

let initialState = [];

if (process.env.NODE_ENV !== "production") {
  initialState = todosSample;
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_TODO:
      return [...state, payload];

    case CHANGE_TODO:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          const { key, val } = payload;
          return { ...todo, key: val };
        }
        return todo;
      });

    default:
      return state;
  }
};

export const NEW_TODO = "NEW_TODO";
export const CHANGE_TODO = "CHANGE_TODO";
