const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from learn-ease back-end!");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
