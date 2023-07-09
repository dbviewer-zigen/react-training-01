// todoActions.ts
// todoActions.ts
import { Dispatch } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  SET_ERROR,
} from "./actionTypes";
import { Todo } from "../types/todoTypes";
import { listTodos } from "../graphql/queries";
import { createTodo } from "../graphql/mutations";

import { GraphQLResult } from "@aws-amplify/api";

interface ErrorResponse {
  errors: { message: string }[];
}

export const fetchTodos = () => {
  console.log("fetchTodos");
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = (await API.graphql(
        graphqlOperation(listTodos)
      )) as GraphQLResult<any>;

      if (response.errors) {
        const errorMessage = response.errors[0].message;
        dispatch({ type: SET_ERROR, payload: errorMessage });
      } else {
        dispatch({
          type: ADD_TODO_SUCCESS,
          payload: response.data?.listTodos?.items,
        });
      }
    } catch (error) {
      const errorMessage = (error as ErrorResponse).errors[0].message;
      dispatch({ type: SET_ERROR, payload: errorMessage });
    }
  };
};

export const addTodo = (todo: Todo) => {
  console.log("addTodo");
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = (await API.graphql(
        graphqlOperation(createTodo, { input: todo })
      )) as GraphQLResult<any>;

      if (response.errors) {
        const errorMessage = response.errors[0].message;
        dispatch({ type: SET_ERROR, payload: errorMessage });
      } else {
        dispatch({
          type: ADD_TODO_SUCCESS,
          payload: response.data?.createTodo,
        });
      }
    } catch (error) {
      const errorMessage = (error as ErrorResponse).errors[0].message;
      dispatch({ type: SET_ERROR, payload: errorMessage });
    }
  };
};

export const updateTodo = (todo: Todo) => {
  return async (dispatch: Dispatch<any>) => {
    // try {
    //   const response = await API.graphql(
    //     graphqlOperation(updateTodo, { input: todo })
    //   );
    //   dispatch({
    //     type: UPDATE_TODO_SUCCESS,
    //     payload: response.data.updateTodo,
    //   });
    // } catch (error) {
    //   dispatch({ type: SET_ERROR, payload: error.message });
    // }
  };
};

export const deleteTodo = (todoId: string) => {
  return async (dispatch: Dispatch<any>) => {
    // try {
    //   await API.graphql(
    //     graphqlOperation(deleteTodo, { input: { id: todoId } })
    //   );
    //   dispatch({ type: DELETE_TODO_SUCCESS, payload: todoId });
    // } catch (error) {
    //   dispatch({ type: SET_ERROR, payload: error.message });
    // }
  };
};

// import { Dispatch } from "react";
// import { client } from "../utils/graphqlClient";
// import {
//   FETCH_TODOS_SUCCESS,
//   ADD_TODO_SUCCESS,
//   UPDATE_TODO_SUCCESS,
//   DELETE_TODO_SUCCESS,
//   SET_ERROR,
// } from "./actionTypes";
// import { Todo } from "../types/todoTypes";

// export const fetchTodos = () => {
//   console.log("called fetchTodos ");

//   return async (dispatch: Dispatch<any>) => {
//     console.log("start ");
//     try {
//       const query = `
//       query {
//         items {
//           id,
//           title,
//           completed
//         }
//       }
//     `;

//       const response: { todos: Todo[] } = await client.request(query);
//       console.log("アイテムの数は", response.todos.length);
//       dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.todos });
//     } catch (error: any) {
//       dispatch({ type: SET_ERROR, payload: error.message });
//     }
//   };
// };

// export const addTodo = (todo: Todo) => {
//   return async (dispatch: Dispatch<any>) => {
//     // try {
//     //   const response =
//     //     await client.request(/* GraphQL mutation for adding an item */);
//     //   dispatch({ type: ADD_ITEM_SUCCESS, payload: response.addTodo });
//     // } catch (error) {
//     //   dispatch({ type: SET_ERROR, payload: error.message });
//     // }
//   };
// };

// export const updateTodo = (todo: Todo) => {
//   return async (dispatch: Dispatch<any>) => {
//     // try {
//     //   const response =
//     //     await client.request(/* GraphQL mutation for updating an item */);
//     //   dispatch({ type: UPDATE_ITEM_SUCCESS, payload: response.updateTodo });
//     // } catch (error) {
//     //   dispatch({ type: SET_ERROR, payload: error.message });
//     // }
//   };
// };

// export const deleteTodo = (id: string) => {
//   return async (dispatch: Dispatch<any>) => {
//     // try {
//     //   await client.request(/* GraphQL mutation for deleting an item */);
//     //   dispatch({ type: DELETE_ITEM_SUCCESS, payload: id });
//     // } catch (error) {
//     //   dispatch({ type: SET_ERROR, payload: error.message });
//     // }
//   };
// };

// // todoActions.ts
// import { Dispatch } from "react";
// import { GraphQLClient } from "../utils/graphqlClient";
// import {
//   FETCH_TODOS_SUCCESS,
//   ADD_TODO_SUCCESS,
//   UPDATE_TODO_SUCCESS,
//   DELETE_TODO_SUCCESS,
//   SET_ERROR,
// } from "./actionTypes";
// import { Todo } from "../types/todoTypes";

// export const fetchTodos = () => {
//   return async (dispatch: Dispatch<any>) => {
//     try {
//       const response =
//         await GraphQLClient.request(/* GraphQL query for fetching todos */);
//       dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.todos });
//     } catch (error) {
//       dispatch({ type: SET_ERROR, payload: error.message });
//     }
//   };
// };

// export const addTodo = (todo: Todo) => {
//   return async (dispatch: Dispatch<any>) => {
//     try {
//       const response: { items: Todo } =
//         await GraphQLClient.request(/* GraphQL mutation for adding a todo */);
//       dispatch({ type: ADD_TODO_SUCCESS, payload: response.addTodo });
//     } catch (error) {
//       dispatch({ type: SET_ERROR, payload: error.message });
//     }
//   };
// };

// export const updateTodo = (todo: Todo) => {
//   return async (dispatch: Dispatch<any>) => {
//     try {
//       const response =
//         await GraphQLClient.request(/* GraphQL mutation for updating a todo */);
//       dispatch({ type: UPDATE_TODO_SUCCESS, payload: response.updateTodo });
//     } catch (error) {
//       dispatch({ type: SET_ERROR, payload: error.message });
//     }
//   };
// };

// export const deleteTodo = (todoId: string) => {
//   return async (dispatch: Dispatch<any>) => {
//     try {
//       await GraphQLClient.request(/* GraphQL mutation for deleting a todo */);
//       dispatch({ type: DELETE_TODO_SUCCESS, payload: todoId });
//     } catch (error) {
//       dispatch({ type: SET_ERROR, payload: error.message });
//     }
//   };
// };
