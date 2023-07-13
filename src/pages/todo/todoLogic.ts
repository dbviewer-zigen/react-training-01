// logic.ts
import { Dispatch, useEffect } from "react";
import { useTodoContext } from "./todoContext";
import { Todo } from "./todoTypes";

import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "../../graphql/mutations";

import { GraphQLResult } from "@aws-amplify/api";
import { Action, ActionTypes } from "./actionTypes";
import { listTodos } from "../../graphql/queries";
import { addTodoSuccess, fetchTodosSuccess, setError } from "./todoActions";
import { ListTodosQuery } from "../../API";

interface ErrorResponse {
  errors: { message: string }[];
}
const useTodoLogic = () => {
  const { state, dispatch } = useTodoContext();

  useEffect(() => {
    console.log("called useTodoLogic#fetchTodos");
    (async () => {
      // Todoの一覧取得APIを呼ぶ
      const result = await API.graphql(graphqlOperation(listTodos));
      if ("data" in result && result.data) {
        const posts = result.data as ListTodosQuery;
        if (posts.listTodos) {
          console.log("Hit件数:", posts.listTodos?.items.length);
          // setPosts(posts.listTodos.items as Todo[]);
          dispatch(fetchTodosSuccess(result.data?.listTodos?.items)); // todoActionを経由してdispathする
        }
      }

      // // 新規追加イベントの購読
      // const client = API.graphql(graphqlOperation(onCreateTodo));
      // if ("subscribe" in client) {
      //   client.subscribe({
      //     next: ({ value: { data } }: PostSubscriptionEvent) => {
      //       if (data.onCreateTodo) {
      //         const post: Todo = data.onCreateTodo;
      //         setPosts((prev) => [...prev, post]);
      //       }
      //     },
      //   });
      // }
    })();

    // Simulated API call or async operation
    const fetchTodos = () => {
      console.log("fetchTodos");
      return async (dispatch: Dispatch<any>) => {
        try {
          const response = (await API.graphql(
            graphqlOperation(listTodos)
          )) as GraphQLResult<any>;

          if (response.errors) {
            console.log("error fetchTodos");

            const errorMessage = response.errors[0].message;
            // dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage });
            dispatch(setError(errorMessage)); // todoActionを経由してdispathする
          } else {
            console.log("success fetchTodos");

            // dispatch({
            //   type: ActionTypes.ADD_TODO_SUCCESS,
            //   payload: response.data?.listTodos?.items,
            // });
            dispatch(fetchTodosSuccess(response.data?.listTodos?.items)); // todoActionを経由してdispathする
          }
        } catch (error) {
          console.log("error fetchTodos");
          const errorMessage = (error as ErrorResponse).errors[0].message;
          // dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage });
          dispatch(setError(errorMessage)); // todoActionを経由してdispathする
        }
      };
    };

    fetchTodos();
  }, [dispatch]);

  const addTodo = (todo: Todo) => {
    console.log("addTodo");
    return async (dispatch: Dispatch<Action>) => {
      try {
        const response = (await API.graphql(
          graphqlOperation(createTodo, { input: todo })
        )) as GraphQLResult<any>;

        if (response.errors) {
          const errorMessage = response.errors[0].message;
          // dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage });
          dispatch(setError(errorMessage)); // todoActionを経由してdispathする
        } else {
          dispatch({
            type: ActionTypes.ADD_TODO_SUCCESS,
            payload: response.data?.createTodo,
          });
          dispatch(addTodoSuccess(response.data?.createTodo)); // todoActionを経由してdispathする
        }
      } catch (error) {
        const errorMessage = (error as ErrorResponse).errors[0].message;
        // dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage });
        dispatch(setError(errorMessage)); // todoActionを経由してdispathする
      }
    };
  };

  // const addTodo = (todo: Todo) => {
  //   // Simulated API call or async operation
  //   // Add logic to handle success and error cases
  // };

  const updateTodo = (todo: Todo) => {
    // Simulated API call or async operation
    // Add logic to handle success and error cases
  };

  const deleteTodo = (todoId: string) => {
    // Simulated API call or async operation
    // Add logic to handle success and error cases
  };

  return {
    todos: state.todos,
    error: state.error,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodoLogic;
