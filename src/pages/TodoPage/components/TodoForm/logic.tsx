// logic.ts
import { useTodoContext } from "../../context";
import { Todo } from "../../types";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import { addTodoSuccess, setError } from "../../action";
import { createTodo } from "../../../../graphql/mutations";

interface ErrorResponse {
  errors: { message: string }[];
}

export const useLogic = () => {
  const { state, dispatch } = useTodoContext();

  const addTodo = async (todo: Todo) => {
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
  return {
    error: state.error,
    addTodo,
  };
};
