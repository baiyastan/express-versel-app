import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Express to versel");
});

app.listen(5000, () => {
  console.log("app is running");
});
