import React, { useContext } from "react";
import { CounterDownButton } from "./CounterDownButton";
import { CounterUpButton } from "./CounterUpButton";
import { CountStateContext, CountDispachContext } from "./CounterContext";

// カウント表示（可変部分)とカウンターボタンエリア(固定部分)にコンポートを分割
export const Count = () => {
  console.log("render Count");
  const state = useContext(CountStateContext); // stateのみ取得しているため、dispachが更新されてもレンダリングされない
  return <div>{state.count}</div>;
};

export const CountButtonArea = () => {
  const dispatch = useContext(CountDispachContext); // dispachのみ取得しているため、stateが更新されてもレンダリングされない
  return (
    <>
      <CounterDownButton countDown={() => dispatch({ type: "decrement" })} />
      <CounterUpButton countUp={() => dispatch({ type: "increment" })} />
    </>
  );
};
