import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({count: state.count + 1})),
  dec: () => set((state) => ({count: state.count -1})),
}))

export default function ZustandComponent() {
  const {count, inc, dec} = useCounterStore();

  const biggerThan10 = String(count >= 10);

  return (
    <div>
      <h2>Zustand</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <h3>{count}</h3>
      <p>10 보다 큰가? : {biggerThan10}</p>
    </div>
  )
}
