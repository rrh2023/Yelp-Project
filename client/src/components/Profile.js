import React, {useEffect, useState} from 'react'
import axios from "axios"
import ProfileMap from "./ProfileMap"


const Profile = ({restaurants, coordinates, removeRestaurant, favoriteRestaurant, setProfileRestaurants, setProfileCoordinates}) => {
   

    //stays in component
    useEffect(() => {
        fetch("/profile").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => {
            setProfileRestaurants(jsonRes);
            setProfileCoordinates(jsonRes);
            // console.log(jsonRes)
        })
        .catch(err => console.log(err));
    }, [restaurants])

   

    return (
        <div>
            <div>
               <ProfileMap coordinates={coordinates} restaurants={restaurants}/>
            </div>

        <h1>Your favorite restaurants!</h1>
        <div>
            {restaurants 
                ? 
            restaurants.map(restaurant => {
            return(
            <div key={restaurant._id}>
                <h1>{restaurant.name}</h1>
                <p>{restaurant.location}</p>
                <p>{restaurant.display_phone}</p>
                <b>Rating: {restaurant.rating}</b> ({restaurant.review_count})
                <br />
                <b>Latitude:</b> {restaurant.latitude} <span><b>Longitude:</b> {restaurant.longitude}</span>
                <br />
                <button onClick={() => removeRestaurant(restaurant._id)}>Remove from favorites</button>
            </div>
            )
            }
                ) 
                : 
            null}
     </div>
             
             
        </div>
       
    )
}

export default Profile
