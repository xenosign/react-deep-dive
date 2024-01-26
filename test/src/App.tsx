import React, { useState } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

const Child1: React.FC = function () {
  const [err, setErr] = useState<boolean>(false);

  const handleClick = (): void => {
    setErr((prev) => !prev);
  };

  if (err) {
    throw new Error("에러 발생!, Child1");
  }

  return <button onClick={handleClick}>에러 발생 버튼</button>;
};

const Child2: React.FC = function () {
  const [err, setErr] = useState<boolean>(false);

  const handleClick = (): void => {
    setErr((prev) => !prev);
  };

  if (err) {
    throw new Error("에러 발생!, Child2");
  }

  return <button onClick={handleClick}>에러 발생 버튼</button>;
};

function App() {
  return (
    <>
      <div className="App">
        <ErrorBoundary>
          <Child1 />
          <Child2 />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
