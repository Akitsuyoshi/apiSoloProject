const express = require("express");

const app = express();

app.use((err, req, res, next) => {
  if (err) console.error(err.stack);

  res.status(500).send("Something broke!");
  next();
});

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/", (req, res) => res.send("Got a POST request"));

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(3000, () => console.log("app listening on port 3000!"));
