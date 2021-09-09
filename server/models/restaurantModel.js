const mongoose = require("mongoose");

const restaurantSchema = {
    name: String, 
    location: String,
    latitude: String,
    longitude: String,
    display_phone: String, 
    price: String, 
    rating: String,
    review_count: String
}

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurant;