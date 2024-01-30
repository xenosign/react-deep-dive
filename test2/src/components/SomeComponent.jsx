import React, { useEffect, useRef, useState } from 'react'

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

export default function SomeComponent() {
  const [counter, setCounter] = useState(0);
  const previousCounter = usePrevious(counter);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  }


  return (
    <div>
      <button onClick={handleClick}>
        {counter} / {previousCounter}
      </button>
    </div>
  )
}
