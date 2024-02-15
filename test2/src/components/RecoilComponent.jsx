import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

// Recoil 파트
const counterState = atom({
  key: "counterState",
  default: 0,
});

function Counter() {
  const [, setCount] = useRecoilState(counterState);

  const handleBtnClick = () => setCount((count) => count + 1);

  return (
    <>
      <button onClick={handleBtnClick}>+</button>
    </>
  );
}

const isBiggerThen10 = selector({
  key: "above10State",
  get: ({ get }) => {
    console.log(get(counterState));
    return get(counterState) >= 10;
  },
});

function Count() {
  const count = useRecoilValue(counterState);
  const biggerThen10 = useRecoilValue(isBiggerThen10);

  return (
    <>
      <h3>{count}</h3>
      <p>10 보다 큰가? : {JSON.stringify(biggerThen10)}</p>
    </>
  );
}

export default function RecoilComponent() {
  return (
    <div>
      <h2>Recoil</h2>
      <RecoilRoot>
        <Counter />
        <Count />
      </RecoilRoot>
    </div>
  )
}
