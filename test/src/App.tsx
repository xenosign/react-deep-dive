import "./App.css";
import { FetchComponent } from "./components/FetchComponent";
import ForwardRef from "./components/ForwardRef";
import { InputComponent } from "./components/InputComponent";
import StaticComponent from "./components/StaticComponent";
import UseDebugValue from "./components/UseDebugValue";
import UseImperativeHandle from "./components/UseImperativeHandle";
import UseReducer from "./components/UseReducer";
import WithFoo from "./components/WithFoo";

function App() {
  return (
    <div className="App">
      <FetchComponent />
    </div>
  );
}

export default App;
