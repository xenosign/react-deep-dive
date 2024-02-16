// @ts-check
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const todoList = [
  {
    id: 1,
    content: "발표 자료 준비",
  },
];

app.get("/fetch", (req, res) => {
  const data = todoList;
  return res.json(data);
});

app.post("/post/:cotent", (req, res) => {
  console.log(req.params);
  const newTodo = {
    id: todoList.length + 1,
    content: req.params.cotent,
  };
  todoList.push(newTodo);
  return res.json("등록 성공");
});

app.listen(PORT, () => {
  console.log(`The express server is running at port: ${PORT}`);
});
