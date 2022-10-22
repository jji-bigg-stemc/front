/*
[
    {
        id: 0,
        club: 'club1',
        name: 'name1',
        participants: [id1, id2, id3],
    }
]
*/

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_TODO:
      return [...state, payload];

    case CHANGE_TODO:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, ...payload };
        }
        return todo;
      });

    default:
      return state;
  }
};

export const NEW_TODO = "NEW_TODO";
export const CHANGE_TODO = "CHANGE_TODO";
