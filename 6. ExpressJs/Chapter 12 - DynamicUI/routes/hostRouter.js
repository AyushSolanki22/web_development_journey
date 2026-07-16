const path = require("path");
const rootDir = require("../utils/path");

const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-home.html"));
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home Registration sucessful for:", req.body.houseName);

  registeredHomes.push({ houseName: req.body.houseName });
  res.sendFile(path.join(rootDir, "views", "add-succeed.html"));
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
