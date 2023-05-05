const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Test Server from Hamid Laptop");
});

app.listen(28960, () => {
  console.log("Example app listening on port 28960!");
});
