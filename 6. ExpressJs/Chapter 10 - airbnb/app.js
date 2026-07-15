const path=require('path')

const express = require("express");
const userRouter=require("./routes/userRouter")
const hostRouter=require("./routes/hostRouter")

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use(userRouter)

app.use("/host",hostRouter)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
