import React, {useState, useEffect}from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
// import "leaflet/dist/leaflet.css";
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Profile from "./components/Profile"
import axios from "axios"


const App = () => {

  // favorite and unfavorite restaurants
  const favoriteRestaurant = (restaurant)=> {
    console.log(restaurant)
    const fullLocation = `${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.state}`

    const newRestaurant = {
        name: restaurant.name,
        location: fullLocation,
        latitude: restaurant.coordinates.latitude,
        longitude: restaurant.coordinates.longitude,
        display_phone: restaurant.display_phone,
        price: restaurant.price,
        rating: restaurant.rating,
        review_count: restaurant.review_count
    }


    axios.post("http://localhost:3001/search", newRestaurant)
}


  const removeRestaurant = (id) => {
    console.log("remove restaurant function working")
    console.log(`this is the supposed id ` + id)
    axios.delete("/delete/" + id) 
  }

  // For Profile.js

  const [restaurants, setRestaurants] = useState([{
    name: "",
    location: "",
    latitude: "",
    longitude: "",
    display_phone: "",
    price: "",
    rating: "",
    review_count: "",
    _id: ""
}])

const [coordinates, setCoordinates] = useState([{
  name: "",
  location: "",
  latitude: "",
  longitude: "",
  display_phone: "",
  price: "",
  rating: "",
  review_count: "",
  _id: ""
}])

const setProfileRestaurants = (response) => {
  setRestaurants(response)
}

const setProfileCoordinates = (response) => {
  setCoordinates(response)
}


  // Body of application

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/search">
            <Search favoriteRestaurant={favoriteRestaurant} removeRestaurant={removeRestaurant} dataRestaurants={restaurants}/>
          </Route>
          <Route path="/profile">
            <Profile removeRestaurant={removeRestaurant} favoriteRestaurant={favoriteRestaurant} coordinates={coordinates}  
            restaurants={restaurants} setProfileRestaurants={setProfileRestaurants} setProfileCoordinates={setProfileCoordinates}/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
