const mongo=require('mongodb');

const MongoClient=mongo.MongoClient;

const MONGO_URL="mongodb+srv://0solankiayush_db_user:Ayush123@cluster0.tut1bew.mongodb.net/?appName=Cluster0";

let _db

//function to make it loadable anywhere (to connect from anywhere),,,, when connected, callback is called to confirm connection 
const mongoConnect =(callback) =>{
  MongoClient.connect(MONGO_URL).then(client=>{
    
    _db=client.db('airbnb');
    callback();

  })
  .catch(err=>{
    console.log("Error wbile connecting to Mongo",err)
  })
}

const getDB=()=>{
  if(!_db) {
    throw new Error("Mongo not connected");
  }
  return _db;
}

exports.mongoConnect=mongoConnect;
exports.getDB=getDB;