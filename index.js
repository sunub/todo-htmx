const express = require("express");
const app = express();

app.use(express.static("public"));

app.post("/add_todo", (req, res) => {
  const todo = req.body.todo;
  console.log(`Received todo: ${todo}`);
  res.send(`Todo received: ${todo}`);
});

app.listen(5500, () => {
  console.log("Server running on port 5500");
});
