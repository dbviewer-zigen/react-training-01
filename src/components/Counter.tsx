import React, { useState } from "react";

export const Counter = () => {
  // useState
  // 　count  Stateの値
  // 　setCount Stateの値を更新するための関数、この関数を呼び出すと再描画する
  // 　useSteteの第一引数　初期値
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
      <button onClick={countDown}>カウントDown</button>
      <button onClick={countUp}>カウントUp</button>
    </>
  );
};
