import { useEffect, useLayoutEffect, useState } from "react";

export default function UseLayout() {
  const [count, setCount] = useState<number>(0);

  useEffect((): void => {
    console.log("useEffect", count);
  }, [count]);

  useLayoutEffect((): void => {
    console.log("Layout", count);
  }, [count]);

  const handleClick = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
