// // App.tsx
// import React from "react";
// import { TodoProvider } from "./store/todoContext";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";

// const App: React.FC = () => {
//   return (
//     <TodoProvider>
//       <h1>TODO Management App</h1>
//       <TodoList />
//       <TodoForm />
//     </TodoProvider>
//   );
// };

// export default App;

// type Todo = {
//   id: string;
//   name: string;
//   description: string | null;
//   createdAt: string;
//   updatedAt: string;
// };

// const App: React.FC = () => {
//   // Todoリスト
//   const [posts, setPosts] = useState<Todo[]>([]);
//   // Todo名
//   const [name, setName] = useState("");

//   // Todo内容
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     (async () => {
//       // Todoの一覧取得
//       const result = await API.graphql(graphqlOperation(listTodos));

//       console.log("リスト検索");
//       // graphqlOperationの内容によって戻り値が変わるのと、objectで特に型の指定もできないで型ガード入れてキャストしている
//       if ("data" in result && result.data) {
//         const posts = result.data as ListTodosQuery;
//         if (posts.listTodos) {
//           console.log(posts.listTodos);
//           setPosts(posts.listTodos.items as Todo[]);
//         }
//       }
//     })();
//   }, []);

//   // Todoを新規追加
//   const addTodo = async () => {
//     if (!name || !description) {
//       return;
//     }
//     // パラメタ
//     const createTodoInput = {
//       name,
//       description,
//     };

//     try {
//       //  Todoの新規追加APIを呼ぶ
//       await API.graphql(
//         graphqlOperation(createTodo, { input: createTodoInput })
//       );

//       console.log("登録成功");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   // Todo名の入力値をstateにセットする
//   const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setName(e.target.value);
//   };

//   // Todo内容の入力値をstateにセットする
//   const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDescription(e.target.value);
//   };
//   return (
//     <div className="App">
//       <div>
//         Todo名
//         <input value={name} onChange={handleChangeName} />
//       </div>
//       <div>
//         Todo内容
//         <input value={description} onChange={handleChangeDescription} />
//       </div>
//       <button onClick={addTodo}>Todo追加</button>

//       <div>
//         {posts.map((data) => {
//           return (
//             <div key={data.id}>
//               <h4>{data.name}</h4>
//               <p>{data.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

import "./App.css";

import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";

import { ListTodosQuery, OnCreateTodoSubscription, Todo } from "./API";
import { createTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import { onCreateTodo } from "./graphql/subscriptions";

type PostSubscriptionEvent = { value: { data: OnCreateTodoSubscription } };
// type Todo = {
//   id: string;
//   name: string;
//   description: string | null;
//   createdAt: string;
//   updatedAt: string;
// };

const App: React.FC = () => {
  // Todoリスト
  const [posts, setPosts] = useState<Todo[]>([]);

  // Todo名
  const [name, setName] = useState("");

  // Todo内容
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {
      // Todoの一覧取得APIを呼ぶ
      const result = await API.graphql(graphqlOperation(listTodos));
      if ("data" in result && result.data) {
        const posts = result.data as ListTodosQuery;
        if (posts.listTodos) {
          console.log("ヒット件数:", posts.listTodos?.items.length);
          setPosts(posts.listTodos.items as Todo[]);
        }
      }

      // 新規追加イベントの購読
      const client = API.graphql(graphqlOperation(onCreateTodo));
      if ("subscribe" in client) {
        client.subscribe({
          next: ({ value: { data } }: PostSubscriptionEvent) => {
            if (data.onCreateTodo) {
              const post: Todo = data.onCreateTodo;
              setPosts((prev) => [...prev, post]);
            }
          },
        });
      }
    })();
  }, []);

  // Todoを新規追加
  const addTodo = async () => {
    if (!name || !description) {
      return;
    }
    // パラメタ
    const createTodoInput = {
      name,
      description,
    };

    try {
      //  Todoの新規追加APIを呼ぶ
      await API.graphql(
        graphqlOperation(createTodo, { input: createTodoInput })
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Todo名の入力値をstateにセットする
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // Todo内容の入力値をstateにセットする
  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className="App">
      <div>
        Todo名
        <input value={name} onChange={handleChangeName} />
      </div>
      <div>
        Todo内容
        <input value={description} onChange={handleChangeDescription} />
      </div>
      <button onClick={addTodo}>追加</button>
      <div>
        {posts.map((data) => {
          return (
            <div key={data.id}>
              {data.name}:{data.description}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
