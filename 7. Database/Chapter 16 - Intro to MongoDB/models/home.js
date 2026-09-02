
const {getDB} = require("../utils/database");
const { ObjectId } = require("mongodb");


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, _id) {
    this.name = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = photoUrl;
    this.description = description;
    if(_id) {
      this._id = _id;
    }
    
  }

  save() {
    const db=getDB();

    if(this._id){  //edit existing home
      const updateFields={name:this.name , price:this.price, location:this.location, rating:this.rating, imageUrl:this.imageUrl, description:this.description}

      return db.collection("homes")
      .updateOne({_id:new ObjectId(String(this._id))}, {$set : updateFields}) 
    }
    else{    //insert
      return db.collection("homes").insertOne(this);
    }

    
}

  static fetchAll() {
    const db=getDB();
    return db.collection("homes").find().toArray(); 
  }

  static findById(homeId) {
    console.log(homeId)
    const db=getDB();
    return db.collection("homes")
    .find({_id:new ObjectId(String(homeId))})
    .next();
  }

  static deleteById(homeId) {
    const db=getDB();
    return db.collection("homes")
    .deleteOne({_id:new ObjectId(String(homeId))})
  }
};