const path=require('path')
const rootDir=require("./utils/path")

const express = require("express");


const userRouter=require("./routes/userRouter")
const {hostRouter}=require("./routes/hostRouter")

const errorController=require("./controllers/error")


const app = express();
app.set("view engine","ejs")
 

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.static(path.join(rootDir,"public")))

app.use(express.urlencoded());

app.use(userRouter)

app.use("/host",hostRouter)


app.use(errorController.error);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
