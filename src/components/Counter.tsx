import React, { useReducer, useState } from "react";
import { CounterDownButton } from "./CounterDownButton";
import { CounterUpButton } from "./CounterUpButton";
import { CountReducer } from "./CountReducer";

// useStateの代わりにuseReducerを使う
export const Counter = () => {
  //const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(CountReducer, 0);

  const countDown = () => {
    dispatch({ type: "decrement" });
  };
  const countUp = () => {
    dispatch({ type: "increment" });
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
