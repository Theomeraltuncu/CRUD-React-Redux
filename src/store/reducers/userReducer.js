const initialState = {
  users: [],
  isDarkMode: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {};

    case "DELETE":
      return {};

    case "UPDATE":
      return {};
    default:
      return state;
  }
};

export default userReducer;
