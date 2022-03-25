const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
app.use(express.static(path.join(__dirname, "./dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./", "dist", "index.html"));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
