const express = require("express");

// const http = require("http");
// const handleRequest=require('./user')

const app = express();

app.use((req,res,next)=>{
  console.log("Came in first Middleware",req.url,req.method)
  next()
})

app.use((req,res,next)=>{
  console.log("Came in second Middleware",req.url,req.method)
  res.send('<p>Welcome Ayush Solanki</p>')
})

// const server = http.createServer(app);

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
  });
