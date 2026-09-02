const path=require('path')
const rootDir=require("./utils/path")

const express = require("express");


const storeRouter=require("./routes/storeRouter")
const {hostRouter}=require("./routes/hostRouter")

const errorController=require("./controllers/error")

const db=require("./utils/database");
const {mongoConnect} = require('./utils/database');


const app = express();
app.set("view engine","ejs")
 


app.use(express.static(path.join(rootDir,"public")))

app.use(express.urlencoded());

app.use(storeRouter)

app.use("/host",hostRouter)


app.use(errorController.error);


const PORT = 3000;
mongoConnect(()=>{             //first mongo gets connected, then application server should start   (not compulsory)
  app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
})

