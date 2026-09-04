const path = require("path");
const rootDir = require("./utils/path");

const express = require("express");

const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");

const errorController = require("./controllers/error");

const { default: mongoose } = require("mongoose");

const app = express();
app.set("view engine", "ejs");

app.use(express.static(path.join(rootDir, "public")));

app.use(express.urlencoded());

//cookie parser middleware
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//logged in(cookie check) middleware 
app.use((req, res, next) => {
  const isLoggedIn = req.cookies.isLoggedIn? req.cookies.isLoggedIn === "true":false;  
  req.isLoggedIn = isLoggedIn;
  next();
});
app.use(authRouter);
app.use(storeRouter);

app.use("host", (req, res, next) => {
  if (!req.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
});
app.use("/host", hostRouter);

app.use(errorController.error);

const PORT = 3000;

const DB_PATH =
  "mongodb+srv://0solankiayush_db_user:Ayush123@cluster0.tut1bew.mongodb.net/airbnb?appName=Cluster0";

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
