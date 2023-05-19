export type State = {
  count: number;
};

export type Actions = { type: "increment" } | { type: "decrement" };

export const CountReducer = (state: State, actions: Actions): State => {
  switch (actions.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
  }
};
