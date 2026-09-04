exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currPage: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  console.log(req.body);
  res.cookie("isLoggedIn", true);
  req.isLoggedIn = true;
  res.redirect("/");  
};

exports.postLogout = (req, res, next) => {
  res.clearCookie("isLoggedIn");
  req.isLoggedIn = false;
  res.redirect("/login");  
}
