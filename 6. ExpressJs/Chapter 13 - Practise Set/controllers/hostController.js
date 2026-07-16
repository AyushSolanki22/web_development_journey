const Home=require("../models/home")

exports.getAddHome = (req, res, next) => {
  res.render("host/add-home", { pageTitle: "Add Home", currPage: "addHome" });
};

exports.postGetHome = (req, res, next) => {
  console.log("Home Registration sucessful for:", req.body);

  const home = new Home(
    req.body.houseName,
    req.body.housePrice,
    req.body.houseLocation,
    req.body.houseRating,
    req.body.photoUrl,
  );
  home.save();

  res.render("host/add-succeed", {
    pageTitle: "Add Home : Success",
    currPage: "homeAdded",
  });
};

exports.getHostHomes = (req, res, next) => {
  //this all to handle async function problem
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currPage: "host-homes",
    });
  });
};


