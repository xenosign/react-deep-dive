import { useEffect, useState } from "react";

export default function DebugTool() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([
    { name: "apple", amount: 5000 },
    { name: "orange", amount: 1000 },
    { name: "watermelon", amount: 1500 },
    { name: "pineapple", amount: 500 },
  ]);

  useEffect(() => {
    setTimeout(() => {
      console.log("surprise!");
      setText("1000");
    }, 3000);
  });

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleSubmit() {
    setList((prev) => [...prev, { name: text, amount: number }]);
  }

  function handleNumberChange(e) {
    setNumber(e.target.valueAsNumber);
  }

  return (
    <div>
      {" "}
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleSubmit}>추가</button>
      <input type="number" value={number} onChange={handleNumberChange} />
      <ul>
        {list.map((value, key) => (
          <li key={key}>
            {value.name} {value.amount}원
          </li>
        ))}
      </ul>
    </div>
  );
}
