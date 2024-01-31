import { useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "up" | "down" | "reset"; payload?: State };

function init(count: State): State {
  return count;
}

const initState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "up":
      return { count: state.count + 1 };
    case "down":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload || { count: 0 });
    default:
      throw new Error("예상치 못한 action 타입 입니다!");
  }
}

export default function UseReducer() {
  const [state, dispatcher] = useReducer(reducer, initState, init);

  const handleUp = (): void => {
    dispatcher({ type: "up" });
  };

  const handleDown = (): void => {
    dispatcher({ type: "down" });
  };

  const handleReset = (): void => {
    dispatcher({ type: "reset", payload: { count: 1 } });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleUp}>UP</button>
      <button onClick={handleDown}>DOWN</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}
