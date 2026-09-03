const path = require("path");
const rootDir = require("./utils/path");

const express = require("express");

const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");

const errorController = require("./controllers/error");

const { default: mongoose } = require("mongoose");

const app = express();
app.set("view engine", "ejs");

app.use(express.static(path.join(rootDir, "public")));

app.use(express.urlencoded());

app.use(storeRouter);

app.use("/host", hostRouter);

app.use(errorController.error);

const PORT = 3000;

const DB_PATH ="mongodb+srv://0solankiayush_db_user:Ayush123@cluster0.tut1bew.mongodb.net/airbnb?appName=Cluster0";

mongoose
  .connect(DB_PATH)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo: ", err);
  });
