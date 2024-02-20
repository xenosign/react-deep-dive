import { memo, useCallback, useEffect, useState } from "react";
import "./App.css";
import ModuleBtn from "./components/ModuleBtn";
import SassBtn from "./components/SassBtn";
import StyledBtn from "./components/StyledBtn";
import TailwindBtn from "./components/TailwindBtn";
import SomeComponent from "./components/SomeComponent";
import UseContext from "./components/UseContext";
import RecoilComponent from "./components/RecoilComponent";
import JotailComponent from "./components/JotailComponent";
import ZustandComponent from "./components/ZustandComponent";
import DevTools from "./components/DevTools";
import DebugTool from "./components/DebugTool";

const ChildComponent = memo(({ name, value, onChange }) => {
  useEffect(() => {
    console.log("렌더링", name);
  });

  return (
    <>
      <h1>
        {name} {value ? "켜짐" : "꺼짐"}
      </h1>
      <button onClick={onChange}>토글</button>
    </>
  );
});

function App() {
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);

  const toggle1 = useCallback(
    function toggle1() {
      setStatus1((prev) => !prev);
    },
    [setStatus1]
  );

  const toggle2 = useCallback(
    function toggle2() {
      setStatus2((prev) => !prev);
    },
    [setStatus2]
  );

  return (
    <div className="App">
      <DebugTool />
    </div>
  );
}

export default App;
