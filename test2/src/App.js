import { memo, useCallback, useEffect, useState } from "react";
import "./App.css";
import ModuleBtn from "./components/ModuleBtn";
import SassBtn from "./components/SassBtn";
import StyledBtn from "./components/StyledBtn";
import TailwindBtn from "./components/TailwindBtn";
import SomeComponent from "./components/SomeComponent";
import UseContext from "./components/UseContext";

const ChildComponent = memo(({ name, value, onChange }) => {
  useEffect(() => {
    console.log('렌더링', name)
  });

  return (
    <>
      <h1>
        {name} {value ? '켜짐' : '꺼짐'}
      </h1>
      <button onClick={onChange}>토글</button>
    </>
  )

})

function App() {
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);

  const toggle1 = useCallback(function toggle1() {
    setStatus1((prev) => !prev)
  }, [setStatus1]);

  const toggle2 = useCallback(function toggle2() {
    setStatus2((prev) => !prev)
  }, [setStatus2]);

  return (
    <div className="App">
      <ChildComponent name="1" value={status1} onChange={toggle1} />
      <ChildComponent name="2" value={status2} onChange={toggle2} />
      <SomeComponent />
      <UseContext />
    </div>
  );
}

export default App;
