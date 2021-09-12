import { useReducer } from "react";

interface State {
  count: number;
}

interface ActionType {
  type: "INCREMENT" | "DECREMENT";
}

function reducer(state: State, action: ActionType) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function useCounter(initialState: number) {
  const [state, dispatch] = useReducer(reducer, { count: initialState });

  return {
    state,
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
}
