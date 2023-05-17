import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const countDown = () => {
    setCount(count - 1);
  };
  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>Counter:{count}</div>
      <button onClick={countDown}>カウントDown</button>
      <button onClick={countUp}>カウントUpo</button>
    </>
  );
};
