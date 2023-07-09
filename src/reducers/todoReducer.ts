// todoReducer.ts
import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  SET_ERROR,
} from "../actions/actionTypes";
import { Todo } from "../types/todoTypes";

interface TodoState {
  todos: Todo[];
  error: string | null;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: TodoState = {
  todos: [],
  error: null,
};

const todoReducer = (
  state: TodoState = initialState,
  action: Action
): TodoState => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        error: null,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        error: null,
      };
    case UPDATE_TODO_SUCCESS:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        error: null,
      };
    case DELETE_TODO_SUCCESS:
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: filteredTodos,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
