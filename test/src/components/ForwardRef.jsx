import { forwardRef, useEffect, useRef } from "react"

const ChildComponent= forwardRef((props, ref) => {
  useEffect(() => {
    console.log(ref);
  }, [ref]);

  return ref.current
});

export default function ForwardRef() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} onClick={() => alert('클릭!')} />
      <ChildComponent ref={inputRef} />
    </div>
  )
}
