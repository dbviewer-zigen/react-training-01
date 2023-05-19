import React from "react";

// 親コンポからState更新用の関数を受けとるためのcountUp属性を持つ
export const CounterUpButton = ({ countUp }: { countUp: () => void }) => {
  console.log("render CounterUpButton");
  return <button onClick={countUp}>カウントUP</button>;
};
