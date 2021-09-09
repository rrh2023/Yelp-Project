import React, {useState, useEffect} from 'react'
import axios from "axios"

const Restaurant = ({restaurant, restaurants, favoriteRestaurant, removeRestaurant, dataRestaurants}) => {

    const [showButton, setShowButton] = useState(false)
    const [restaurantRestaurants, setRestaurantRestaurants] = useState([{
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

    useEffect(() => {
        fetch("/profile").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => {
          
            // console.log(jsonRes)
        })
        .catch(err => console.log(err));
    }, [dataRestaurants])

    // const fetchRestaurantData = () => {
    //     fetch("/profile").then(res => {
    //         if(res.ok){
    //             return res.json()
    //         }
    //     }).then(jsonRes => {
    //         setRestaurantRestaurants(jsonRes);
    //         console.log(restaurantRestaurants)
    //     })
    //     .catch(err => console.log(err));
    // }

    return (
            <div>

                
                <h1>{restaurant.name}</h1>
                {restaurant.location ? 
                <p>
                    {restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.state}
                    <br />
                    {restaurant.display_phone}
                    <br />
                    <b>Rating: {restaurant.rating}</b> ({restaurant.review_count})
                    <br />
                    <b>Latitude:</b> {restaurant.coordinates.latitude} <span><b>Longitude:</b> {restaurant.coordinates.longitude}</span>
                    <br />

                    <button onClick={() => favoriteRestaurant(restaurant)}>Favorite Restaurant</button>
                </p>
        :
        null
        }
            
        </div>
    
        
    )
}

export default Restaurant
