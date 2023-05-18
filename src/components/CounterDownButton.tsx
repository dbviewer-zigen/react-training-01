import React, { useMemo } from "react";

export const CounterDownButton = ({ countDown }: { countDown: () => void }) => {
  console.log("render CounterDownButton");
  return <button onClick={countDown}>カウントDown</button>;
};
