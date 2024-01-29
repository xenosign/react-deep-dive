import { useState } from "react";
import "./App.css";
import ModuleBtn from "./components/ModuleBtn";
import SassBtn from "./components/SassBtn";
import StyledBtn from "./components/StyledBtn";
import TailwindBtn from "./components/TailwindBtn";

function App() {
  const [state, setState] = useState(() => {
    console.log("복잡한 연산");
    return 0;
  });


  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => setState((prev) => prev + 1)}>리렌더링</button>
    </>
  );
}

export default App;
