import {
  addTodoSuccess,
  deleteTodoSuccess,
  fetchTodosSuccess,
  setError,
  updateTodoSuccess,
} from "../../pages/TodoPage/action";
import { ActionTypes } from "../../pages/TodoPage/actionTypes";
import todoReducer from "../../pages/TodoPage/reducer";
import { Todo, TodoState } from "../../pages/TodoPage/types";

describe("Reducer のテスト", () => {
  it("fetchTodosSuccess Todoリストを2件、返すこと", () => {
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

    const initialState: TodoState = {
      todos: [],
      error: null,
    };
    const state = todoReducer(initialState, action);
    expect(state.error).toBe(null);
    expect(state.todos.length).toBe(2);
  });

  it("fetchTodosSuccess initialStateのtodosを上書きしていることを確認", () => {
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
      {
        id: "3",
        name: "Task 3",
        description: "Description 3",
      },
    ];
    const action = fetchTodosSuccess(dummyDatas);
    expect(action.type).toBe(ActionTypes.FETCH_TODOS_SUCCESS);

    const initiList: Todo[] = [
      {
        id: "0",
        name: "Task 0",
        description: "Description 0",
      },
    ];

    const initialState: TodoState = {
      todos: initiList,
      error: null,
    };
    const state = todoReducer(initialState, action);
    expect(state.error).toBe(null);
    expect(state.todos.length).toBe(3); // initialStateのtodosを上書きしていることを確認
  });

  it("addTodoSuccess の確認", () => {
    const dummyData: Todo = {
      id: "1",
      name: "Task 1",
      description: "Description 1",
    };

    const action = addTodoSuccess(dummyData);
    expect(action.type).toBe(ActionTypes.ADD_TODO_SUCCESS);

    const initiList: Todo[] = [
      {
        id: "0",
        name: "Task 0",
        description: "Description 0",
      },
    ];

    const initialState: TodoState = {
      todos: initiList,
      error: null,
    };
    const state = todoReducer(initialState, action);
    // エラーが発生していないことを確認
    expect(state.error).toBe(null);
    // リストの件数を確認
    expect(state.todos.length).toBe(2); // initialStateのtodosを上書きしていることを確認

    // 先頭データを確認
    expect(state.todos[0].id).toBe("0"); // 先頭のID
    expect(state.todos[0].name).toBe("Task 0"); // 先頭のName
    expect(state.todos[0].description).toBe("Description 0"); // 先頭のDescription

    // 後ろに追加されていることを確認
    expect(state.todos[1].id).toBe("1"); // ID
    expect(state.todos[1].name).toBe("Task 1"); // Name
    expect(state.todos[1].description).toBe("Description 1"); // Description
  });

  it("addTodoSuccess 同一IDのデータを複数登録できないことの確認", () => {
    const dummyData: Todo = {
      id: "1",
      name: "Task 1",
      description: "Description 1",
    };

    const action = addTodoSuccess(dummyData);
    expect(action.type).toBe(ActionTypes.ADD_TODO_SUCCESS);

    const initiList: Todo[] = [
      {
        id: "0",
        name: "Task 0",
        description: "Description 0",
      },
    ];

    const initialState: TodoState = {
      todos: initiList,
      error: null,
    };
    const state = todoReducer(initialState, action);
    // エラーが発生していないことを確認
    expect(state.error).toBe(null);
    // リストの件数を確認
    expect(state.todos.length).toBe(2); // initialStateのtodosを上書きしていることを確認

    // 先頭データを確認
    expect(state.todos[0].id).toBe("0"); // 先頭のID
    expect(state.todos[0].name).toBe("Task 0"); // 先頭のName
    expect(state.todos[0].description).toBe("Description 0"); // 先頭のDescription

    // 後ろに追加されていることを確認
    expect(state.todos[1].id).toBe("1"); // ID
    expect(state.todos[1].name).toBe("Task 1"); // Name
    expect(state.todos[1].description).toBe("Description 1"); // Description

    // -------------------
    // 二回目の登録
    // -------------------
    const state2 = todoReducer(state, action); // 前回のstateを渡す
    // エラーが発生していないことを確認
    expect(state2.error).toBe(null);
    // リストの件数を確認
    expect(state2.todos.length).toBe(2); // initialStateのtodosを上書きしていることを確認

    // 先頭データを確認
    expect(state2.todos[0].id).toBe("0"); // 先頭のID
    expect(state2.todos[0].name).toBe("Task 0"); // 先頭のName
    expect(state2.todos[0].description).toBe("Description 0"); // 先頭のDescription

    // 後ろに追加されていることを確認
    expect(state2.todos[1].id).toBe("1"); // ID
    expect(state2.todos[1].name).toBe("Task 1"); // Name
    expect(state2.todos[1].description).toBe("Description 1"); // Description
  });

  it("updateTodoSuccess の確認", () => {
    const dummyData: Todo = {
      id: "0",
      name: "Task 0から1",
      description: "Description 0から1",
    };

    const action = updateTodoSuccess(dummyData);
    expect(action.type).toBe(ActionTypes.UPDATE_TODO_SUCCESS);

    const initiList: Todo[] = [
      {
        id: "0",
        name: "Task 0",
        description: "Description 0",
      },
    ];

    const initialState: TodoState = {
      todos: initiList,
      error: null,
    };
    const state = todoReducer(initialState, action);
    // エラーが発生していないことを確認
    expect(state.error).toBe(null);
    // リストの件数を確認
    expect(state.todos.length).toBe(1);

    // 先頭データを確認
    expect(state.todos[0].id).toBe("0"); // 先頭のID
    expect(state.todos[0].name).toBe("Task 0から1"); // 先頭のName
    expect(state.todos[0].description).toBe("Description 0から1"); // 先頭のDescription
  });

  it("deleteTodoSuccess の確認", () => {
    const dummyData: Todo = {
      id: "0",
      name: "Task 0から1",
      description: "Description 0から1",
    };

    const action = deleteTodoSuccess(dummyData.id);
    expect(action.type).toBe(ActionTypes.DELETE_TODO_SUCCESS);

    const initiList: Todo[] = [
      {
        id: "0",
        name: "Task 0",
        description: "Description 0",
      },
    ];

    const initialState: TodoState = {
      todos: initiList,
      error: null,
    };
    const state = todoReducer(initialState, action);
    // エラーが発生していないことを確認
    expect(state.error).toBe(null);
    // リストの件数を確認
    expect(state.todos.length).toBe(0); // 削除されるためゼロ件
  });

  it("SET_ERROR の確認", () => {
    const action = setError("エラーが発生しました");
    expect(action.type).toBe(ActionTypes.SET_ERROR);

    const initiList: Todo[] = [
      {
        id: "0",
        name: "Task 0",
        description: "Description 0",
      },
    ];

    const initialState: TodoState = {
      todos: initiList,
      error: null,
    };
    const state = todoReducer(initialState, action);
    // エラーが発生していないことを確認
    expect(state.error).toBe("エラーが発生しました");
    // リストの件数を確認
    expect(state.todos.length).toBe(1);
  });
});
