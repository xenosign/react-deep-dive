import { memo, useEffect, useState } from "react";

type Props = {
  counter: number;
};

const Component = memo((props: Props) => {
  useEffect(() => {
    console.log("Component 랜더!");
  });

  return <h1>{props.counter}</h1>;
});

type DeeperProps = {
  counter: {
    counter: number;
  };
};

const DeeperComponent = memo((props: DeeperProps) => {
  useEffect(() => {
    console.log("DeeperComponent 랜더!");
  });

  return <h1>{props.counter?.counter}</h1>;
});

export default function Chapter01() {
  const [, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <Component counter={100} />
      <DeeperComponent counter={{ counter: 100 }} />
      <button onClick={handleClick}>리렌더</button>
    </div>
  );
}
