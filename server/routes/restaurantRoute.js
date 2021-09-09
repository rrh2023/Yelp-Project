const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurantModel")

// POST REQUEST
router.route("/search").post((req, res) => {
    const name = req.body.name;
    const location = req.body.location;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const display_phone = req.body.display_phone;
    const price = req.body.price;
    const rating = req.body.rating;
    const review_count = req.body.review_count;
    const newRestaurant = new Restaurant({
        name,
        location,
        latitude,
        longitude,
        display_phone,
        price,
        rating,
        review_count,
    })

    newRestaurant.save(); 
})

// GET REQUEST
router.route("/profile").get((req, res) => {
    Restaurant.find()
    .then(foundRestaurants => res.json(foundRestaurants))
})

// DELETE REQUEST
router.route("/delete/:id").delete((req, res) => {
    const id = req.params.id;

    Restaurant.findByIdAndDelete({_id: id}, (req, res, err) => {
        if(!err){
            console.log("Restaurant deleted from favorites")
        }else{
            console.log(err)
        }
    })
})

module.exports = router;

