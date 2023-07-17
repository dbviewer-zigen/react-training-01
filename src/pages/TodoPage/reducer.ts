// todoReducer.ts
import { Action, ActionTypes } from "./actionTypes";
import { initialState } from "./context";
import { Todo, TodoState } from "./types";

// export const initialState: TodoState = {
//   todos: [],
//   error: null,
// };

const todoReducer = (
  state: TodoState = initialState,
  action: Action
): TodoState => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS_SUCCESS:
      console.log("todoReducer#call FETCH_TODOS_SUCCESS action:", action);
      return {
        ...state,
        todos: action.payload,
        error: null,
      };

    case ActionTypes.ADD_TODO_SUCCESS:
      console.log("todoReducer#call ADD_TODO_SUCCESS action:", action);

      // <subscribeしていない場合>
      // 以下のようにaction.payload(Todo)を配列の最後に追加する
      // return {
      //   ...state,
      //   todos: [...state.todos, action.payload],
      //   error: null,
      // };

      // <subscribeしている場合は>
      // onCreateにより２重でこのロジックが呼ばれるため、２重登録にならないようにする
      var target = action.payload as Todo;
      const tempTodos = state.todos.filter((todo) => todo.id !== target.id); // 登録対象のtodoIdを一旦除外する
      return {
        ...state,
        todos: [...tempTodos, target],
        error: null,
      };

    case ActionTypes.UPDATE_TODO_SUCCESS:
      console.log("## call UPDATE_TODO_SUCCESS action:", action);
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        error: null,
      };
    case ActionTypes.DELETE_TODO_SUCCESS:
      console.log("todoReducer#call DELETE_TODO_SUCCESS action:", action);

      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: filteredTodos,
        error: null,
      };
    case ActionTypes.SET_ERROR:
      console.log("todoReducer#call SET_ERROR action:", action);
      return {
        ...state,
        error: action.payload,
      };
    default:
      console.log("todoReducer#call default action:", action);
      return state;
  }
};

export default todoReducer;
