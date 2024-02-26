import "./App.css";
import ForwardRef from "./components/ForwardRef";
import StaticComponent from "./components/StaticComponent";
import UseDebugValue from "./components/UseDebugValue";
import UseImperativeHandle from "./components/UseImperativeHandle";
import UseReducer from "./components/UseReducer";
import WithFoo from "./components/WithFoo";

function App() {
  return (
    <div className="App">
      <StaticComponent />
    </div>
  );
}

export default App;
