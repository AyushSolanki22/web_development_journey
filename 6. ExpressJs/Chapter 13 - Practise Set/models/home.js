//Core Modules
const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");

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
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err) => {
        console.log("file Writing concluded", err);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      console.log("file read: ", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
