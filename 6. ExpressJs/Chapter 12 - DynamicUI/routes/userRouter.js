const path = require("path");

const rootDir = require("../utils/path");
const { registeredHomes } = require("./hostRouter");

const express = require("express");
const userRouter = express.Router();


userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes)
  res.render('home',{registeredHomes: registeredHomes, pageTitle: 'airbnb Home'})
});

module.exports = userRouter;
