const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoDB
const mongoUri = "mongodb+srv://rrh2023:BUschool2019!@cluster0.dx0cb.mongodb.net/restaurantsDB"
mongoose.connect(mongoUri)

// require route
app.use("/", require("./routes/restaurantRoute"))

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})