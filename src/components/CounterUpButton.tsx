import React from "react";

export const CounterUpButton = ({ countUp }: { countUp: () => void }) => {
  console.log("render CounterUpButton");
  return <button onClick={countUp}>カウントDown</button>;
};
