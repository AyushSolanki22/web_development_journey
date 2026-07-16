const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  //this all to handle async function problem
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes",
      currPage: "Home",
    });
  });
};

exports.getIndex = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
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
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    res.render("store/favourite-list", {
      registeredHomes: registeredHomes,
      pageTitle: "My Favourites",
      currPage: "favourites",
    });
  });
};
