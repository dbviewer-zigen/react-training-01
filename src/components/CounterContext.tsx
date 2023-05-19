import { createContext, useReducer, useState } from "react";
import { Actions, CountReducer, State } from "./CountReducer";

// --------------------------------------
// 再描画防止
// ContextのStateとDispathを分割する
// --------------------------------------
export const CountStateContext = createContext<State>({} as State);

export const CountDispachContext = createContext<React.Dispatch<Actions>>(
  {} as React.Dispatch<Actions>
);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CountProvider = ({ children }: Props) => {
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(CountReducer, initialState);

  return (
    <CountStateContext.Provider value={state}>
      <CountDispachContext.Provider value={dispatch}>
        {children}
      </CountDispachContext.Provider>
    </CountStateContext.Provider>
  );
};

// export { CountContext, CountProvider };
