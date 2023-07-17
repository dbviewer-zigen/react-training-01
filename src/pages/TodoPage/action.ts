import { Todo } from "./types";
import { Action, ActionTypes } from "./actionTypes";

export const fetchTodosSuccess = (todos: Todo[]): Action => {
  console.log("action#call fetchTodosSuccess:", todos);
  return {
    type: ActionTypes.FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};

export const addTodoSuccess = (todo: Todo): Action => {
  console.log("action#call addTodoSuccess:", todo);
  return {
    type: ActionTypes.ADD_TODO_SUCCESS,
    payload: todo,
  };
};

export const updateTodoSuccess = (todo: Todo): Action => {
  console.log("action#call updateTodoSuccess:", todo);
  return {
    type: ActionTypes.UPDATE_TODO_SUCCESS,
    payload: todo,
  };
};

export const deleteTodoSuccess = (todoId: string): Action => {
  console.log("action#call addTodoSuccess:", todoId);
  return {
    type: ActionTypes.DELETE_TODO_SUCCESS,
    payload: todoId,
  };
};

export const setError = (error: string): Action => {
  console.log("action#call setError:", error);
  return {
    type: ActionTypes.SET_ERROR,
    payload: error,
  };
};
