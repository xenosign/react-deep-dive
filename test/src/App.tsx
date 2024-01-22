import React from "react";
import "./App.css";
import Chapter01 from "./components/Chapter01";
import Chapter01_1 from "./components/Chapter01_1";

function App() {
  return (
    <>
      <div className="App">
        <Chapter01_1 />
        {React.createElement("button", "", "TEST")}
      </div>
    </>
  );
}

export default App;
