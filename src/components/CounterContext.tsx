import { createContext, useReducer, useState } from "react";
import { Actions, CountReducer } from "./CountReducer";

// コンテキストの作成(引数はデフォルトの値および関数)
// この方法(dispathを使わない)では、ステートを変更する関数が増えると引数が増える
// <CountContext.Provider>のvalue属性に関数を追加していく必要がある
// const CountContext = createContext({
//   count: 0,
//   dispatch: {},
// });

type CounterContextType = {
  count: number;
  dispatch: React.Dispatch<Actions>;
};

export const CountContext = createContext<CounterContextType>(
  {} as CounterContextType
);

interface Props {
  children: JSX.Element | JSX.Element[];
}

// const CountProvider = ({ children }: Props): JSX.Element => {
export const CountProvider = ({ children }: Props) => {
  const [count, dispatch] = useReducer(CountReducer, 0);

  return (
    <CountContext.Provider
      value={{
        count,
        dispatch,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

// export { CountContext, CountProvider };
