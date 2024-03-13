import "./App.css";
import { FetchComponent } from "./components/FetchComponent";
import ForwardRef from "./components/ForwardRef";
import { InputComponent } from "./components/InputComponent";
import StaticComponent from "./components/StaticComponent";
import TestUseEffectDebugger from "./components/TestUseEffectDebugger";
import UseDebugValue from "./components/UseDebugValue";
import UseImperativeHandle from "./components/UseImperativeHandle";
import UseReducer from "./components/UseReducer";
import UseSyncExternalStore from "./components/UseSyncExternalStore";
import WithFoo from "./components/WithFoo";
import UseEffectSeries from "./components/useEffectSeries";

function App() {
  return (
    <div className="App">
      <UseEffectSeries />
    </div>
  );
}

export default App;
