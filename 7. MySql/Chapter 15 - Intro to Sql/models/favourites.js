//Core Modules
const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home is already marked favourite");
      } else {
        favourites.push(homeId);

        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static DeleteFavourite(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      
      const favouriteHomes = favourites.filter(
        (favourite) => favourite != homeId,
      );
      fs.writeFile(favouriteDataPath, JSON.stringify(favouriteHomes), callback);
    });
  }
};
