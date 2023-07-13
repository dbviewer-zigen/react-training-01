// export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
// export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
// export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
// export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
// export const SET_ERROR = "SET_ERROR";

export enum ActionTypes {
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS",
  UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS",
  DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS",
  SET_ERROR = "SET_ERROR",
}

export interface Action {
  type: ActionTypes;
  payload?: any; // ここは意図的にany(エラーメッセージ(String型)を復帰するケースがある)
}
