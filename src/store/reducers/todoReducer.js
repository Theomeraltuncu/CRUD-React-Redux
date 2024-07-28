import ActionTypes from "../actionTypes";

const initialState = {
  todos: [],
  isDarkMode: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };

    case ActionTypes.DELETE:
      const filtered = state.todos.filter((i) => i.id !== action.payload);
      return {
        ...state,
        todos: filtered,
      };

    case ActionTypes.UPDATE:
      const updatedTodo = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return {
        ...state,
        todos: updatedTodo,
      };

    case ActionTypes.SET:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
