import React from "react";

// 親コンポからState更新用の関数を受けとるためのcountDown属性を持つ
export const CounterDownButton = ({ countDown }: { countDown: () => void }) => {
  console.log("render CounterDownButton");
  return <button onClick={countDown}>カウントDown</button>;
};
