import React, { useState } from "react";
import { CounterDownButton } from "./CounterDownButton";
import { CounterUpButton } from "./CounterUpButton";

// カウントUPボタン、カウントDownボタンを別コンポーネントに分割
// ボタンコンポーネント(子コンポ)からStateを更新する必要があるため、
// Steteを更新するsetCount(関数)を子コンポに渡す。
export const Counter = () => {
  const [count, setCount] = useState(0);

  const countDown = () => {
    setCount(count - 1);
  };
  const countUp = () => {
    setCount(count + 1);
  };

  console.log("render Counter");
  return (
    <>
      <div>Counter:{count}</div>
      <CounterDownButton countDown={countDown}></CounterDownButton>
      <CounterUpButton countUp={countUp}></CounterUpButton>
    </>
  );
};
