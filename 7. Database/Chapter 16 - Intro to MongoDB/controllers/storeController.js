const Favourite = require("../models/favourites");
const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  //this all to handle async function problem
  Home.fetchAll().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes",
      currPage: "Home",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
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
  Favourite.getFavourites().then(favourites => {
    favourites=favourites.map(fav=>fav.houseId)

    Home.fetchAll().then((registeredHomes) => {
      console.log(favourites, registeredHomes)
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home._id.toString()),
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
  const homeId=req.body.id;

  Favourite.getFavourites().then((favourites)=>{
    
    const exists=favourites.some(home=> home.houseId===homeId)

    if(exists){
      console.log("Already added to favourite")
      res.redirect("/favourites")
    }
    else{
      const fav=new Favourite(homeId)
  fav.addToFavourite().then(result =>{
    console.log('Fav added')
  }).catch(err=>{
    console.log("Error while adding favourite: ", err);
  }).finally(()=>{
    res.redirect("/favourites");
  })
    }

  })

}

exports.postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("connection  made", homeId);

  Favourite.DeleteFavourite(homeId).then(result =>{
    console.log('Fav removed')
  }).catch(err=>{
    console.log("Error while removing favourite: ", err);
  }).finally(()=>{
    res.redirect("/favourites");
  }) 
  
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;

  Home.findById(homeId).then(home => {
    if (!home) {
      res.redirect("/homes");
      console.log("Home not found")
    }
    else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currPage: "Home",
      });
    }
  });
};
