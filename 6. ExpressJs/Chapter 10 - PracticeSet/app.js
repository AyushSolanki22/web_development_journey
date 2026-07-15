//Local Modules
const path = require("path");
const rootDir=require("./utils/path")

//External Modules
const express = require("express");
const router = require("./routes/router");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);   //each time logging of url, method
  next();
});

app.use(express.urlencoded())   //parsing

//Handling
app.use(router)


app.use((req, res) => {       //404 error for wrong url 
  //Response sending MiddleWare - 3rd
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
