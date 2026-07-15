 //external modules
const express = require("express"); 
const router=express.Router()

//file import  //local module   //to get rootDir
const path = require("path");
const rootDir=require('../utils/path')


router.get("/", (req, res) => {  //modular codes
  console.log("handling /");
  res.sendFile(path.join(rootDir,'views','home.html'))
});



router.get("/contact-us", (req, res) => {
  console.log("handling /contact-us");
  res.sendFile(path.join(rootDir,'views','contact-us.html'));
});



router.post("/contact-us",(req,res,next)=>{
  console.log("recieved post")
  console.log(req.body)
  res.sendFile(path.join(rootDir,'views','contact-succeed.html'));
})




module.exports=router