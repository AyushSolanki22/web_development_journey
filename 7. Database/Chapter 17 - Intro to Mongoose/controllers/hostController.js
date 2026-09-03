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

  const home = new Home({
    name: req.body.houseName,
    price: req.body.housePrice,
    location: req.body.houseLocation,
    rating: req.body.houseRating,
    imageUrl: req.body.photoUrl,
    description: req.body.description,
  });
  home.save().then((result) => {
    console.log("Home saved successfully", result);
    res.redirect("/host/host-homes");
  });
};

exports.postEditHome = (req, res, next) => {
  const {
    id,
    houseName,
    housePrice,
    houseLocation,
    houseRating,
    photoUrl,
    description,
  } = req.body;

  Home.findById(id)
    .then((home) => {
      if (!home) {
        console.log("Home not found for editing");
        return res.redirect("/host/host-homes");
      }
      home.name = houseName;
      home.price = housePrice;
      home.location = houseLocation;
      home.rating = houseRating;
      home.imageUrl = photoUrl;
      home.description = description;

      home
        .save()
        .then(res.redirect("/host/host-homes"))
        .catch((err) => {
          console.log("Error while editing home: ", err);
          res.redirect("/host/host-homes");
        });
    })
    .catch((err) => {
      console.log("Error while editing home: ", err);
      res.redirect("/host/host-homes");
    });
};

exports.getHostHomes = (req, res, next) => {
  //this all to handle async function problem
  const registeredHomes = Home.find().then((registeredHomes) => {
    console.log(registeredHomes);
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currPage: "host-homes",
    });
  });
};

exports.postDeleteHome = (req, res, next) => {
  console.log("Deleting home with id:", req.params.homeId);
  const homeId = req.params.homeId;
  Home.findByIdAndDelete(homeId)
    .then(() => {
      res.redirect("/host/host-homes");
    })
    .catch((error) => {
      console.log("Error while deleting", error);
    });
};
