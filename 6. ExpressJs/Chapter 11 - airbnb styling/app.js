const path=require('path')
const rootDir=require("./utils/path")

const express = require("express");
const userRouter=require("./routes/userRouter")
const hostRouter=require("./routes/hostRouter")

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.static(path.join(rootDir,"public")))

app.use(express.urlencoded());

app.use(userRouter)

app.use("/host",hostRouter)

app.use((req, res) => {       //404 error for wrong url 
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
