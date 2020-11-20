const { json } = require("express");
const express = require("express");
const cors = require("cors");
const { default: Signin } = require("../client/src/Signin");
const app = express();

app.use(express.json());
app.use(cors());



app.get("/", function (req, res) {
  res.status(200).send("Welcome to my server");
});

app.get("/users/:id", function (req, res) {
  res.json({ userData });
});

app.post("/*", function (req, res) {
    if (!req.body.userName || !req.body.password || !req.body.description) {
    res.status(503).send("server requires something i dont have");
});
res.json(Signin(req.body));
});

app.listen(5000, function () {
  console.log("server is running");
});