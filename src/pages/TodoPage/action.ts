import { Todo } from "./types";
import { Action, ActionTypes } from "./actionTypes";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";

import { createTodo, deleteTodo, updateTodo } from "../../graphql/mutations";
import { listTodos } from "../../graphql/queries";
import {
  ListTodosQuery,
  OnCreateTodoSubscription,
  OnDeleteTodoSubscription,
  OnUpdateTodoSubscription,
} from "../../API";
import {
  onCreateTodo,
  onDeleteTodo,
  onUpdateTodo,
} from "../../graphql/subscriptions";
import Observable, { ZenObservable } from "zen-observable-ts";

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
interface ErrorResponse {
  errors: { message: string }[];
}

export const fetchTodos = async (dispatch: React.Dispatch<Action>) => {
  console.log("fetchTodos");
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
};
export const addTodo = async (dispatch: React.Dispatch<Action>, todo: Todo) => {
  console.log("addTodo");
  try {
    const response = (await API.graphql(
      graphqlOperation(createTodo, { input: todo })
    )) as GraphQLResult<any>;

    if (response.errors) {
      const errorMessage = response.errors[0].message;
      dispatch(setError(errorMessage)); // todoActionを経由してdispathする
    } else {
      console.log("更新データ ", response.data?.createTodo);
      dispatch(addTodoSuccess(response.data?.createTodo)); // todoActionを経由してdispathする
    }
  } catch (error) {
    console.log("error addTodo");
    const errorMessage = (error as ErrorResponse).errors[0].message;
    dispatch(setError(errorMessage)); // todoActionを経由してdispathする
  }
};
// updateTodoという名称はAppsyncのmutationと被るため、editとしている
export const editTodo = async (
  dispatch: React.Dispatch<Action>,
  todo: Todo
) => {
  console.log("editTodo todoId:", todo);

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
// deleteTodoという名称はAppsyncのmutationと被るため、removeとしている
export const removeTodo = async (
  dispatch: React.Dispatch<Action>,
  todoId: string
) => {
  console.log("removeTodo todoId:", todoId);

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

type TodoSubscriptionCreateEvent = {
  value: { data: OnCreateTodoSubscription };
};
type TodoSubscriptionUpdateEvent = {
  value: { data: OnUpdateTodoSubscription };
};
type TodoSubscriptionDeleteEvent = {
  value: { data: OnDeleteTodoSubscription };
};

export const addSubscription = (
  dispatch: React.Dispatch<Action>
): ZenObservable.Subscription | null => {
  const addSub = API.graphql(
    graphqlOperation(onCreateTodo)
  ) as Observable<object>;
  if ("subscribe" in addSub) {
    const subscription = addSub.subscribe({
      next: ({ value: { data } }: TodoSubscriptionCreateEvent) => {
        if (data.onCreateTodo) {
          const todo: Todo = data.onCreateTodo;
          console.log("subscrbe ", todo);
          dispatch(addTodoSuccess(todo)); // todoActionを経由してdispathする
        }
      },
    });
    return subscription;
  }
  return null;
};

export const updateSubscription = (
  dispatch: React.Dispatch<Action>
): ZenObservable.Subscription | null => {
  // 更新された時のSubscriptionを登録
  const updateSub = API.graphql(
    graphqlOperation(onUpdateTodo)
  ) as Observable<object>;
  if ("subscribe" in updateSub) {
    const subscription = updateSub.subscribe({
      next: ({ value: { data } }: TodoSubscriptionUpdateEvent) => {
        if (data.onUpdateTodo) {
          const todo: Todo = data.onUpdateTodo;
          console.log("subscrbe ", todo);
          dispatch(updateTodoSuccess(todo)); // todoActionを経由してdispathする
        }
      },
    });
    return subscription;
  }
  return null;
};

export const deleteSubscription = (
  dispatch: React.Dispatch<Action>
): ZenObservable.Subscription | null => {
  // 削除された時のSubscriptionを登録
  const deleteSub = API.graphql(
    graphqlOperation(onDeleteTodo)
  ) as Observable<object>;
  if ("subscribe" in deleteSub) {
    const subscription = deleteSub.subscribe({
      next: ({ value: { data } }: TodoSubscriptionDeleteEvent) => {
        if (data.onDeleteTodo) {
          const todo: Todo = data.onDeleteTodo;
          console.log("subscrbe ", todo);
          dispatch(deleteTodoSuccess(todo.id)); // todoActionを経由してdispathする
        }
      },
    });
    return subscription;
  }
  return null;
};
