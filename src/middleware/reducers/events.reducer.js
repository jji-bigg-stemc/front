const initialState = [
  {
    id: 1,
    title: "Add the New Pricing Page",
    date: "2021-08-01",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc elit aliquet nunc, eget aliquam elit nisl eget nunc. Sed euismod, nunc ut aliquam aliquam, nunc elit aliquet nunc, eget aliquam elit nisl eget nunc.",
    project: "Project 1",
    participants: [
      // a list of user ids
    ],
    photos: [],
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_EVENT:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export const NEW_EVENT = "NEW_EVENT";
