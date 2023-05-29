# 前提条件

本サンプルは、JSON サーバから Todo リストを取得して表示します。

React を実行(npm stat)する前に、json-server を起動する必要があります。

react-hook-form を使い、必須チェック、桁数チェックを実装

## このサンプルに必要なライブラリ

```
$ npm install ulid
$ npm install axios
$ npm install react-hook-form
$ npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
$ npm install react-icons
```

## index.tsx に ChakraProvider を入れる

```
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ChakraProvider>
    <TodoListPage />
  </ChakraProvider>

  // </React.StrictMode>
);
```

## json-server を起動方法

```
$ npx json-server --watch db.json --port 3100
```

## json-server の動作確認

以下の URL に接続し、JSON が表示されていることを確認してください。

```
$ curl http://localhost:3100/todos
[
  {
    "id": "1",
    "title": "テストメッセージ１",
    "completed": false,
    "userId": "user01"
  },
  {
    "id": "2",
    "title": "テストメッセージ２",
    "completed": false,
    "userId": "user02"
  },
  {
    "id": "3",
    "title": "テストメッセージ３",
    "completed": false,
    "userId": "user03"
  }
```

## React の実行

```
$ npm start
```
