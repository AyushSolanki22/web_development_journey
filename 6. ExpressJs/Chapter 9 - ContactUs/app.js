const express = require("express");

const app = express();

app.use((req, res, next) => {
  //First Dummy MiddleWare
  console.log(req.url, req.method);
  next();
});

app.use((req, res, next) => {
  //Second Dummy MiddleWare
  console.log(req.url, req.method);
  next();
});

//Handling
app.get("/", (req, res) => {
  console.log("handling /");
  res.send("<h1>Welcome to Coding</h1><a href='/contact-us'>Contact Us</a>");
});



app.get("/contact-us", (req, res) => {
  console.log("handling /contact-us");
  res.send(`<form action="/contact-us" method="POST">
  <input type="text" placeholder="Enter your Name" name="name">
  <input type="text" placeholder="Enter your email" name="email">
  <button>Submit</button>
</form>`);
});

app.post("/contact-us",(req,res,next)=>{
  console.log("recieved post")
})


app.use((req, res) => {
  //Response sending MiddleWare - 3rd
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
