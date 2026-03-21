const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");

const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const { createReview, destroyReview } = require("../controllers/reviews.js");


//Reviews 
//post review route
router.post("/",isLoggedIn, validateReview , wrapAsync(createReview));

//delete review route
router.delete("/:reviewId" ,isLoggedIn ,isReviewAuthor, wrapAsync(destroyReview));

module.exports = router;
