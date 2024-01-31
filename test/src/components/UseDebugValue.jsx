import { useDebugValue, useState } from "react";

function useDate() {
  const date = new Date();
  useDebugValue(date, (date) => `현재시간: ${date.toISOString()}`);
  return date;
}

export default function UseDebugValue() {
  const date = useDate();
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(prev => prev + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <h1>{date.toISOString()}</h1>
      <button onClick={handleClick}>렌더링</button>
    </div>
  )
}
