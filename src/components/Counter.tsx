import React, { useContext, useMemo } from "react";
import { CounterDownButton } from "./CounterDownButton";
import { CounterUpButton } from "./CounterUpButton";
import { Actions } from "./CountReducer";
import { CountContext } from "./CounterContext";

// カウント表示（可変部分)とカウンターボタン(固定部分)にコンポートを分割
export const Count = () => {
  console.log("render Count");
  // CountContextからcountのみを取得
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
};

export const CountButtonArea = () => {
  //const [count, setCount] = useState(0);
  // const [count, dispatch] = useReducer(CountReducer, 0);

  // CountContextからdispatchのみを取得
  const { dispatch } = useContext(CountContext);

  // Contextからdispachだけを取得していても、再描画がされるためuseMemoを使いメモ化する
  //return <DispatchButton dispatch={dispatch} />;
  return useMemo(() => {
    return (
      <>
        <CounterDownButton countDown={() => dispatch({ type: "decrement" })} />
        <CounterUpButton countUp={() => dispatch({ type: "increment" })} />
      </>
    );
  }, [dispatch]);
  // useMemoの第二引数について
  // 第二奇数の意味 依存配列
  // ・依存配列の要素の値が変わると再計算(描画)される
  // ・依存配列を[]にすると、関数コンポーネントが初めて描画される時だけ計算(描画)する

  // 今回のケース(useReducerを使っているケース)
  // ・依存配列にcountを設定すると、count値が変わる事に再描画する・・・useMemoの意味がない
  // ・依存配列にdispathをを設定しても、dispath値は変わらないので、再描画されない・・・期待どおり
  // ・依存配列に[]を設定すると、初回のみ描画する・・・期待どおり（推奨されない実装）
};

// // dispatch を Props として受け取るコンポーネントをメモ化し、不要な再レンダリングを防ぐ
// const DispatchButton = React.memo(
//   ({ dispatch }: { dispatch: React.Dispatch<Actions> }) => {
//     console.log("render DispatchButton ", typeof dispatch);

//     return (
//       <>
//         <CounterDownButton countDown={() => dispatch({ type: "decrement" })} />
//         <CounterUpButton countUp={() => dispatch({ type: "increment" })} />
//       </>
//     );
//   }
// );
