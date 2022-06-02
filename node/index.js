const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Garrett's node app");
});

app.listen(1234, () =>
  console.log("Site is being hosted at http://localhost:1234.")
);
