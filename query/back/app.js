// @ts-check
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const todo = [
  {
    id: 1,
    content: "발표 자료 준비",
  },
];

app.get("/todo", (req, res) => {
  const data = todo;
  console.log(data);
  return res.json(data);
});

app.post("/add", (req, res) => {});

app.listen(PORT, () => {
  console.log(`The express server is running at port: ${PORT}`);
});
