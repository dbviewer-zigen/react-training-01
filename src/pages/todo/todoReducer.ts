// todoReducer.ts
import { Action, ActionTypes } from "./actionTypes";
import { Todo, TodoState } from "./todoTypes";

// interface TodoState {
//   todos: Todo[];
//   error: string | null;
// }

// interface Action {
//   type: string;
//   payload: any;
// }

const initialState: TodoState = {
  todos: [],
  error: null,
};

const todoReducer = (
  state: TodoState = initialState,
  action: Action
): TodoState => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS_SUCCESS:
      console.log("call FETCH_TODOS_SUCCESS action:", action);

      return {
        ...state,
        todos: action.payload,
        error: null,
      };
    case ActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        error: null,
      };
    case ActionTypes.UPDATE_TODO_SUCCESS:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        error: null,
      };
    case ActionTypes.DELETE_TODO_SUCCESS:
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: filteredTodos,
        error: null,
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      console.log("call default action:", action);
      return state;
  }
};

export default todoReducer;
