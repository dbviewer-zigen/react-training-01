import { Todo } from "./todoTypes";
import { Action, ActionTypes } from "./actionTypes";

export const fetchTodosSuccess = (todos: Todo[]): Action => {
  console.log("called fetchTodosSuccess");
  return {
    type: ActionTypes.FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};

export const addTodoSuccess = (todo: Todo): Action => {
  return {
    type: ActionTypes.ADD_TODO_SUCCESS,
    payload: todo,
  };
};

export const updateTodoSuccess = (todo: Todo): Action => {
  return {
    type: ActionTypes.UPDATE_TODO_SUCCESS,
    payload: todo,
  };
};

export const deleteTodoSuccess = (todoId: string): Action => {
  return {
    type: ActionTypes.DELETE_TODO_SUCCESS,
    payload: todoId,
  };
};

export const setError = (error: string): Action => {
  return {
    type: ActionTypes.SET_ERROR,
    payload: error,
  };
};
