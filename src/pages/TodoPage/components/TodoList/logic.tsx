// logic.ts
import { Dispatch, useEffect } from "react";
import { useTodoContext } from "../../context";
import { Todo } from "../../types";

import { API, graphqlOperation } from "aws-amplify";

import { GraphQLResult } from "@aws-amplify/api";
import {
  addTodoSuccess,
  deleteTodoSuccess,
  fetchTodosSuccess,
  setError,
  updateTodoSuccess,
} from "../../action";

import {
  ListTodosQuery,
  OnCreateTodoSubscription,
  OnDeleteTodoSubscription,
  OnUpdateTodoSubscription,
} from "../../../../API";
import { listTodos } from "../../../../graphql/queries";
import { deleteTodo, updateTodo } from "../../../../graphql/mutations";
import {
  onCreateTodo,
  onDeleteTodo,
  onUpdateTodo,
} from "../../../../graphql/subscriptions";

interface ErrorResponse {
  errors: { message: string }[];
}

type TodoSubscriptionCreateEvent = {
  value: { data: OnCreateTodoSubscription };
};
type TodoSubscriptionUpdateEvent = {
  value: { data: OnUpdateTodoSubscription };
};
type TodoSubscriptionDeleteEvent = {
  value: { data: OnDeleteTodoSubscription };
};

export const useLogic = () => {
  const { state, dispatch } = useTodoContext();

  useEffect(() => {
    console.log("called useTodoLogic#useEffect");

    (async () => {
      // Todoの一覧取得APIを呼ぶ;
      try {
        const result = await API.graphql(graphqlOperation(listTodos));
        if ("data" in result && result.data) {
          const posts = result.data as ListTodosQuery;
          if (posts.listTodos) {
            console.log("Hit件数:", posts.listTodos?.items.length);
            dispatch(fetchTodosSuccess(result.data?.listTodos?.items)); // todoActionを経由してdispathする
          }
        }
      } catch (error) {
        console.log("error fetchTodos2");
        const errorMessage = (error as ErrorResponse).errors[0].message;
        dispatch(setError(errorMessage)); // todoActionを経由してdispathする
      }

      // 追加された時のSubscriptionを登録
      const addSub = API.graphql(graphqlOperation(onCreateTodo));
      if ("subscribe" in addSub) {
        addSub.subscribe({
          next: ({ value: { data } }: TodoSubscriptionCreateEvent) => {
            if (data.onCreateTodo) {
              const todo: Todo = data.onCreateTodo;
              console.log("subscrbe ", todo);
              dispatch(addTodoSuccess(todo)); // todoActionを経由してdispathする
            }
          },
        });
      }
      // 更新された時のSubscriptionを登録
      const updateSub = API.graphql(graphqlOperation(onUpdateTodo));
      if ("subscribe" in updateSub) {
        updateSub.subscribe({
          next: ({ value: { data } }: TodoSubscriptionUpdateEvent) => {
            if (data.onUpdateTodo) {
              const todo: Todo = data.onUpdateTodo;
              console.log("subscrbe ", todo);
              dispatch(updateTodoSuccess(todo)); // todoActionを経由してdispathする
            }
          },
        });
      }
      // 削除された時のSubscriptionを登録
      const deleteSub = API.graphql(graphqlOperation(onDeleteTodo));
      if ("subscribe" in deleteSub) {
        deleteSub.subscribe({
          next: ({ value: { data } }: TodoSubscriptionDeleteEvent) => {
            if (data.onDeleteTodo) {
              const todo: Todo = data.onDeleteTodo;
              console.log("subscrbe ", todo);
              dispatch(deleteTodoSuccess(todo.id)); // todoActionを経由してdispathする
            }
          },
        });
      }
    })();
  }, [dispatch]);

  // deleteTodoという名称はAppsyncのmutationと被るため、removeとしている
  const removeTodo = async (todoId: string) => {
    console.log("start Logic#deleteTodo todoId:", todoId);

    try {
      const response = (await API.graphql(
        graphqlOperation(deleteTodo, { input: { id: todoId } })
      )) as GraphQLResult<any>;
      if (response.errors) {
        const errorMessage = response.errors[0].message;
        dispatch(setError(errorMessage)); // todoActionを経由してdispathする
      } else {
        dispatch(deleteTodoSuccess(todoId)); // todoActionを経由してdispathする
      }
    } catch (error) {
      console.log("error deleteTodo:");
      const errorMessage = (error as ErrorResponse).errors[0].message;
      dispatch(setError(errorMessage)); // todoActionを経由してdispathする
    }
  };

  // updateTodoという名称はAppsyncのmutationと被るため、editとしている
  const editTodo = async (todo: Todo) => {
    console.log("start Logic#editTodo todoId:", todo);

    try {
      const response = (await API.graphql(
        graphqlOperation(updateTodo, { input: todo })
      )) as GraphQLResult<any>;
      if (response.errors) {
        const errorMessage = response.errors[0].message;
        dispatch(setError(errorMessage)); // todoActionを経由してdispathする
      } else {
        console.log("更新データ ", response.data?.updateTodo);
        dispatch(updateTodoSuccess(response.data?.updateTodo)); // todoActionを経由してdispathする
      }
    } catch (error) {
      console.log("error deleteTodo:");
      const errorMessage = (error as ErrorResponse).errors[0].message;
      dispatch(setError(errorMessage)); // todoActionを経由してdispathする
    }
  };

  return {
    todos: state.todos,
    error: state.error,
    editTodo,
    removeTodo,
  };
};
