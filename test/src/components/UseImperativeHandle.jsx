import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"

const Input= forwardRef((props, ref) => {
  // useImperativeHandle 를 사용하면 ref 의 동작을 추가로 정의할 수 있다
  useImperativeHandle(
    ref,
    () => ({
      alert: () => alert(props.value)
    }),
    [props.value]
  )  

  return <input ref={ref} {...props} />
});

export default function UseImperativeHandle() {
  const inputRef = useRef();

  const [text, setText] = useState('');

  const handleClick = () => {
    inputRef.current.alert();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <Input ref={inputRef} value={text} onChange={handleChange} />
      <button onClick={handleClick}>Focus</button>
    </div>
  )
}
