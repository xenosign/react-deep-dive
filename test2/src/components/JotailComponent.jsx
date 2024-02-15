import { atom, useAtom, useAtomValue } from "jotai";

const counterState = atom(0);

function Counter() {
  const [, setCount] = useAtom(counterState);

  const handleBtnClick = () => setCount((count) => count + 1);

  return (
    <>
      <button onClick={handleBtnClick}>+</button>
    </>
  )
}

const isBiggerThen10 = atom((get) => get(counterState) >= 10);

function Count() {
  const count = useAtomValue(counterState);
  const biggerThen10 = useAtomValue(isBiggerThen10);

  return (
    <>
      <h3>{count}</h3>
      <p>10 보다 큰가? : {JSON.stringify(biggerThen10)}</p>
    </>
  );
}

export default function JotailComponent() {
  return (
    <div>
      <h2>Jotai</h2>
      <Counter />
      <Count />
    </div>
  )
}
