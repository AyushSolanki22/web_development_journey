const { getDB } = require("../utils/database");

module.exports = class Favourite {

  constructor(houseId) {
    this.houseId=houseId;
  }

  addToFavourite() {
    const db=getDB();
    return db.collection("favourites").insertOne(this);
  }

  static getFavourites() {
    const db=getDB();
    return db.collection("favourites").find().toArray(); 
  }

  static DeleteFavourite(delhomeId) {
    const db=getDB();
    return db.collection("favourites").deleteOne({houseId:delhomeId})
  }
};
