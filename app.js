const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/warriorsfight/:value1/:value2", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
