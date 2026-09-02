const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home",
    currPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-homes");
    }

    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your Home",
      currPage: "host-homes",
      editing: editing,
    });
  });
};

exports.postAddHome = (req, res, next) => {
  console.log("Home Registration sucessful for:", req.body);

  const home = new Home(
    req.body.houseName,
    req.body.housePrice,
    req.body.houseLocation,
    req.body.houseRating,
    req.body.photoUrl,
    req.body.description,
  );
  home.save().then((result) => {
    console.log("Home saved successfully", result);
    res.redirect("/host/host-homes");
  });
};

exports.postEditHome = (req, res, next) => {
  console.log("Home Update sucessful:", req.body);

  const home = new Home(
    req.body.houseName,
    req.body.housePrice,
    req.body.houseLocation,
    req.body.houseRating,
    req.body.photoUrl,
    req.body.description,
  );
  home._id = req.body.id;
  home.save().then(res.redirect("/host/host-homes"));
};

exports.getHostHomes = (req, res, next) => {
  //this all to handle async function problem
  const registeredHomes = Home.fetchAll().then((registeredHomes) => {
    console.log(registeredHomes);
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currPage: "host-homes",
    });
  });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.deleteById(homeId)
    .then(() => {
      res.redirect("/host/host-homes");
    })
    .catch((error) => {
      console.log("Error while deleting", error);
    });
};
