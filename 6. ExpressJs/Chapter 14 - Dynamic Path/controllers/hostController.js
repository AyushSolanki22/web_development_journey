const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", { pageTitle: "Add Home", currPage: "addHome", editing: false });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-homes");
    }

    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your Home",
      currPage: "host-homes",
      editing: editing
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
  );
  home.save();

  res.redirect("/host/host-homes")
};

exports.postEditHome = (req, res, next) => {
  console.log("Home Update sucessful:", req.body);

  const home = new Home(
    req.body.houseName,
    req.body.housePrice,
    req.body.houseLocation,
    req.body.houseRating,
    req.body.photoUrl,
  );
  home.id=req.body.id;
  home.save();

  res.redirect("/host/host-homes")
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


exports.postDeleteHome = (req, res, next) => {
  const homeId=req.params.homeId;
  Home.deleteById(homeId, error =>{
    if(error) console.log("Error while deleting: ", error)
    res.redirect("/host/host-homes")
  })
};