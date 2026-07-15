const path = require("path");
const rootDir = require("../utils/path");

const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-home.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "add-succeed.html"));
});

module.exports = hostRouter;
