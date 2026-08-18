const Favourite = require("../models/favourites");
const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  //this all to handle async function problem
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes",
      currPage: "Home",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "Home Page",
      currPage: "index",
    });
  });
};

exports.getBookings = (req, res, next) => {
  //this all to handle async function problem
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currPage: "bookings",
  });
};

exports.getFavourites = (req, res, next) => {
  Favourite.getFavourites((favourites) => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home.id),
      );
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currPage: "favourites",
      });
    });
  });
};

exports.postAddToFavourite = (req, res, next) => {
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favourite: ", error);
    }
    res.redirect("/favourites");
  });
};

exports.postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("connection  made", homeId);

  Favourite.DeleteFavourite(homeId, (error) => {
    if (error) console.log("error while deleting favourite: ".error);

    res.redirect("/favourites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;

  Home.findById(homeId, (home) => {
    if (!home) res.redirect("/homes");
    else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currPage: "Home",
      });
    }
  });
};
