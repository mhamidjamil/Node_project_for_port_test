const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Test Server from Hamid Laptop");
});
let port = 1984;
app.listen(port, () => {
  console.log("Example app listening on port " + port + "!");
});
