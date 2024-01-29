import { useEffect, useState } from "react";
import "./App.css";
import ModuleBtn from "./components/ModuleBtn";
import SassBtn from "./components/SassBtn";
import StyledBtn from "./components/StyledBtn";
import TailwindBtn from "./components/TailwindBtn";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const addMouseEvent = () => {
      console.log(counter);
    }

    window.addEventListener('click', addMouseEvent);

    return () => {
      console.log('클린업 함수 실행!', counter);
      window.removeEventListener('click', addMouseEvent);
    }
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>리렌더링</button>
    </>
  );
}

export default App;
