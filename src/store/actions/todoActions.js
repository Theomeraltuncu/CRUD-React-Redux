// this process is for writing less dispatch code in te component file

import ActionTypes from "../actionTypes";

export const deleteTodo = (payload) => {
  return {
    type: ActionTypes.DELETE,
    payload: payload,
  };
};
export const addTodo = (payload) => {
  return {
    type: ActionTypes.ADD,
    payload,
  };
};
export const updateTodo = (payload) => {
  return {
    type: ActionTypes.UPDATE,
    payload,
  };
};
export const setTodos = (payload) => ({
  type: ActionTypes.SET,
  payload,
});
