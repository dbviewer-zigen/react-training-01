import {
  addTodoSuccess,
  deleteTodoSuccess,
  fetchTodosSuccess,
  setError,
  updateTodoSuccess,
} from "../../pages/TodoPage/action";
import { ActionTypes } from "../../pages/TodoPage/actionTypes";
import { Todo } from "../../pages/TodoPage/types";

describe("Action Creators のテスト", () => {
  it("SET_ERROR アクションを返すこと", () => {
    const action = setError("エラーメッセージ");
    expect(action.type).toBe(ActionTypes.SET_ERROR);
    expect(action.payload).toBe("エラーメッセージ");
  });

  it("fetchTodosSuccess アクションを返すこと", () => {
    const dummyDatas: Todo[] = [
      {
        id: "1",
        name: "Task 1",
        description: "Description 1",
      },
      {
        id: "2",
        name: "Task 2",
        description: "Description 2",
      },
    ];
    const action = fetchTodosSuccess(dummyDatas);
    expect(action.type).toBe(ActionTypes.FETCH_TODOS_SUCCESS);
    expect(action.payload).toBe(dummyDatas);
  });
  it("addTodoSuccess アクションを返すこと", () => {
    const dummyData: Todo = {
      id: "1",
      name: "Task 1",
      description: "Description 1",
    };

    const action = addTodoSuccess(dummyData);
    expect(action.type).toBe(ActionTypes.ADD_TODO_SUCCESS);
    expect(action.payload).toBe(dummyData);
  });
  it("updateTodoSuccess アクションを返すこと", () => {
    const dummyData: Todo = {
      id: "1",
      name: "Task 1",
      description: "Description 1",
    };

    const action = updateTodoSuccess(dummyData);
    expect(action.type).toBe(ActionTypes.UPDATE_TODO_SUCCESS);
    expect(action.payload).toBe(dummyData);
  });
  it("deleteTodoSuccess アクションを返すこと", () => {
    const dummyData: Todo = {
      id: "1",
      name: "Task 1",
      description: "Description 1",
    };

    const action = deleteTodoSuccess(dummyData.id);
    expect(action.type).toBe(ActionTypes.DELETE_TODO_SUCCESS);
    expect(action.payload).toBe("1");
  });
});
