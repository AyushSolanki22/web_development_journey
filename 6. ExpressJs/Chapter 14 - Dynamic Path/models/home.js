//Core Modules
const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");
const { error } = require("../controllers/error");
const Favourite = require("./favourites");

const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.housePrice = price;
    this.houseLocation = location;
    this.houseRating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      if (this.id) {
        //edit home case
        registeredHomes = registeredHomes.map((home) =>
          home.id === this.id ? this : home,
        );
      } else {
        //add home case
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }

      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err) => {
        console.log("file Writing concluded", err);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((registeredHomes) => {
      const homeFound = registeredHomes.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }

  static deleteById(homeId, callback) {
    this.fetchAll((registeredHomes) => {
      registeredHomes = registeredHomes.filter((home) => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error=>{
        Favourite.DeleteFavourite(homeId, callback)
      });
    });
  }
};
