const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { signup, renderSignUpForm, renderLogInForm, login, logout } = require("../controllers/users.js");


router
  .route("/signup")
  .get(renderSignUpForm)
  .post(wrapAsync(signup));


router
  .route("/login")
  .get(renderLogInForm)
  .post(saveRedirectUrl , passport.authenticate("local", {failureRedirect : '/login', failureFlash : true}), login);

router.get("/logout", logout);

module.exports = router;