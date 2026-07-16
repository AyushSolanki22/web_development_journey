const path = require("path");
const rootDir = require("../utils/path");

const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.render('add-home',{pageTitle: 'Add Home'})
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home Registration sucessful for:", req.body.houseName);

  registeredHomes.push({ houseName: req.body.houseName });
  res.render('add-succeed',{pageTitle: 'Add Home : Sucecess'})
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
