const express = require("express");
const cors = require("cors");
const shortId = require("shortid");

const app = express();
const urls = {};

app.use(cors()); // Enable CORS

app.get("/shorten", (req, res) => {
  const url = req.query.url;
  const id = shortId.generate();

  urls[id] = url;

  res.send(`http://localhost:3000/${id}`);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const url = urls[id];

  if (url) {
    res.redirect(url);
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
