const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const { index, renderNewForm, showListing, createListing, renderEditForm, updateListing, destroyListing, filteredListing, filteredListingByCountry } = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");

const upload = multer({storage});

//filtering by countries
router
   .route("/countries")
   .get(wrapAsync(filteredListingByCountry));
//listing filters by category 
router
   .route("/filters/:filter")
   .get(wrapAsync(filteredListing));


//new route
router.get("/new",isLoggedIn , renderNewForm);

//router.route -- index and create route
router
   .route("/")
   .get(wrapAsync(index))
   .post(isLoggedIn ,upload.single('listing[image]') , validateListing, wrapAsync(createListing));


// show route , update route and delete route
router
   .route("/:id")
   .get(wrapAsync(showListing))
   .put(isLoggedIn ,isOwner, upload.single('listing[image]'), validateListing , wrapAsync(updateListing))
   .delete(isLoggedIn ,isOwner , wrapAsync(destroyListing));

//edit route
router.get("/:id/edit",isLoggedIn ,isOwner , wrapAsync(renderEditForm));

module.exports = router;
