import React, { useReducer, useState } from "react";
import { CounterDownButton } from "./CounterDownButton";
import { CounterUpButton } from "./CounterUpButton";
import { CountReducer } from "./CountReducer";

// useStateの代わりにuseReducerを使う
// useReducerのメリット(一部)
//  ステートを更新するアクションを別の関数コンポで宣言できる。
// 　- ロジックの単体テストが容易になる。
//   - ソースの可読性が向上する.
//   - 再レンダリング防止するための処理が容易になる。
export const Counter = () => {
  //const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(CountReducer, 0);

  // const countDown = () => {
  //   dispatch({ type: "decrement" });
  // };
  // const countUp = () => {
  //   dispatch({ type: "increment" });
  // };

  console.log("render Counter");
  return (
    <>
      <div>Counter:{count}</div>
      {/* <CounterDownButton countDown={countDown}></CounterDownButton>
      <CounterUpButton countUp={countUp}></CounterUpButton> */}
      <CounterDownButton countDown={() => dispatch({ type: "decrement" })} />
      <CounterUpButton countUp={() => dispatch({ type: "increment" })} />
    </>
  );
};
