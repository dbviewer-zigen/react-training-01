import React, {
  Dispatch,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import { CounterDownButton } from "./CounterDownButton";
import { CounterUpButton } from "./CounterUpButton";
import { Actions, CountReducer } from "./CountReducer";
import { CountContext } from "./CounterContext";

// カウント表示（可変部分)とカウンターボタン(固定部分)にコンポートを分割
export const Count = () => {
  console.log("render Count");
  // CountContextからcountのみを取得
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
};

// type CounterDispatch = Dispatch<Actions>;

export const Counter = () => {
  //const [count, setCount] = useState(0);
  // const [count, dispatch] = useReducer(CountReducer, 0);

  // CountContextからdispatchのみを取得
  const { dispatch } = useContext(CountContext);

  // CountContext.Providerのvalueが更新されると再レンダリングするため、
  // React.memoを使って再レンダリングしないようにボタンコンポーネントをメモ化する。
  // countを渡さずにdispathのみ渡しているところがポイント
  return <DispatchButton dispatch={dispatch} />;
};

// dispatch を Props として受け取るコンポーネントをメモ化し、不要な再レンダリングを防ぐ
const DispatchButton = React.memo(
  ({ dispatch }: { dispatch: React.Dispatch<Actions> }) => {
    console.log("render DispatchButton ", typeof dispatch);

    return (
      <>
        <CounterDownButton countDown={() => dispatch({ type: "decrement" })} />
        <CounterUpButton countUp={() => dispatch({ type: "increment" })} />
      </>
    );
  }
);
