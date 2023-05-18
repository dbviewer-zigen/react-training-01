export type Actions = { type: "increment" } | { type: "decrement" };

export const CountReducer = (counter: number, actions: Actions): number => {
  switch (actions.type) {
    case "increment": {
      return counter + 1;
    }
    case "decrement": {
      return counter - 1;
    }
  }
};
